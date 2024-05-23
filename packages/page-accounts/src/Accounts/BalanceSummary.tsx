// Copyright 2017-2024 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { ActionStatus } from '@polkadot/react-components/Status/types';
import type { KeyringAddress } from '@polkadot/ui-keyring/types';
import type { BN } from '@polkadot/util';
import type { AccountBalance, Delegation, SortedAccount } from '../types.js';
import type { SortCategory } from '../util.js';

import React, { useCallback, useEffect, useMemo, useState } from 'react';

import {  styled,  } from '@polkadot/react-components';
import { getAccountCryptoType } from '@polkadot/react-components/util';
import { useAccounts, useDelegations, useFavorites, useNextTick, useProxies } from '@polkadot/react-hooks';
import { keyring } from '@polkadot/ui-keyring';

import { BN_ZERO } from '@polkadot/util';



import { sortAccounts } from '../util.js';
import Account from './Account.js';

import Summary from './Summary.js';

interface Balances {
  accounts: Record<string, AccountBalance>;
  summary?: AccountBalance;
}

interface Props {
  className?: string;
  onStatusChange: (status: ActionStatus) => void;
}

interface SortControls {
  sortBy: SortCategory;
  sortFromMax: boolean;
}

type GroupName = 'accounts' | 'hardware' | 'injected' | 'multisig' | 'proxied' | 'qr' | 'testing';

const DEFAULT_SORT_CONTROLS: SortControls = { sortBy: 'date', sortFromMax: true };

const STORE_FAVS = 'accounts:favorites';

const GROUP_ORDER: GroupName[] = ['accounts', 'injected', 'qr', 'hardware', 'proxied', 'multisig', 'testing'];

function groupAccounts (accounts: SortedAccount[]): Record<GroupName, string[]> {
  const ret: Record<GroupName, string[]> = {
    accounts: [],
    hardware: [],
    injected: [],
    multisig: [],
    proxied: [],
    qr: [],
    testing: []
  };

  for (let i = 0, count = accounts.length; i < count; i++) {
    const { account, address } = accounts[i];
    const cryptoType = getAccountCryptoType(address);

    if (account?.meta.isHardware) {
      ret.hardware.push(address);
    } else if (account?.meta.isTesting) {
      ret.testing.push(address);
    } else if (cryptoType === 'injected') {
      ret.injected.push(address);
    } else if (cryptoType === 'multisig') {
      ret.multisig.push(address);
    } else if (cryptoType === 'proxied') {
      ret.proxied.push(address);
    } else if (cryptoType === 'qr') {
      ret.qr.push(address);
    } else {
      ret.accounts.push(address);
    }
  }

  return ret;
}

function BalanceSummary ({ className = '' }: Props): React.ReactElement<Props> {

 
  const { allAccounts } = useAccounts();
 

  const [favorites, toggleFavorite] = useFavorites(STORE_FAVS);
  const [balances, setBalances] = useState<Balances>({ accounts: {} });
  const [filterOn] = useState<string>('');
  const [sortedAccounts, setSorted] = useState<SortedAccount[]>([]);
  const [{ sortBy, sortFromMax }] = useState<SortControls>(DEFAULT_SORT_CONTROLS);
  const delegations = useDelegations();
  const proxies = useProxies();
  const isNextTick = useNextTick();

 





  const setBalance = useCallback(
    (account: string, balance: AccountBalance) =>
      setBalances(({ accounts }: Balances): Balances => {
        accounts[account] = balance;

        const aggregate = (key: keyof AccountBalance) =>
          Object.values(accounts).reduce((total: BN, value: AccountBalance) => total.add(value[key]), BN_ZERO);

        return {
          accounts,
          summary: {
            bonded: aggregate('bonded'),
            locked: aggregate('locked'),
            redeemable: aggregate('redeemable'),
            total: aggregate('total'),
            transferrable: aggregate('transferrable'),
            unbonding: aggregate('unbonding')
          }
        };
      }),
    []
  );

  

  // We use favorites only to check if it includes some element,
  // so Object is better than array for that because hashmap access is O(1).
  const favoritesMap = useMemo(
    () => Object.fromEntries(favorites.map((x) => [x, true])),
    [favorites]
  );

  // detect multisigs
  

  // proxy support
 

  const accountsMap = useMemo(
    () => allAccounts
      .map((address, index): Omit<SortedAccount, 'account'> & { account: KeyringAddress | undefined } => {
        const deleg = delegations && delegations[index]?.isDelegating && delegations[index]?.asDelegating;
        const delegation: Delegation | undefined = (deleg && {
          accountDelegated: deleg.target.toString(),
          amount: deleg.balance,
          conviction: deleg.conviction
        }) || undefined;

        return {
          account: keyring.getAccount(address),
          address,
          delegation,
          isFavorite: favoritesMap[address ?? ''] ?? false
        };
      })
      .filter((a): a is SortedAccount => !!a.account)
      .reduce((ret: Record<string, SortedAccount>, x) => {
        ret[x.address] = x;

        return ret;
      }, {}),
    [allAccounts, favoritesMap, delegations]
  );

  

  const grouped = useMemo(
    () => groupAccounts(sortedAccounts),
    [sortedAccounts]
  );

  const accounts = useMemo(
    () => Object.values(accountsMap).reduce<Record<string, React.ReactNode>>((all, { account, address, delegation, isFavorite }, index) => {
      all[address] = (
        <Account
          account={account}
          delegation={delegation}
          filter={filterOn}
          isFavorite={isFavorite}
          key={address}
          proxy={proxies?.[index]}
          setBalance={setBalance}
          toggleFavorite={toggleFavorite}
        />
      );

      return all;
    }, {}),
    [accountsMap, filterOn, proxies, setBalance, toggleFavorite]
  );

  const groups = useMemo(
    () => GROUP_ORDER.reduce<Record<string, React.ReactNode[]>>((groups, group) => {
      const items = grouped[group];

      if (items.length) {
        groups[group] = items.map((account) => accounts[account]);
      }

      return groups;
    }, {}),
    [grouped, accounts]
  );

  useEffect((): void => {
    setSorted((prev) => [
      ...prev
        .map((x) => accountsMap[x.address])
        .filter((x): x is SortedAccount => !!x),
      ...Object
        .keys(accountsMap)
        .filter((a) => !prev.find((y) => a === y.address))
        .map((a) => accountsMap[a])
    ]);
  }, [accountsMap]);

  useEffect((): void => {
    setSorted((sortedAccounts) =>
      sortAccounts(sortedAccounts, accountsMap, balances.accounts, sortBy, sortFromMax));
  }, [accountsMap, balances, sortBy, sortFromMax]);

  console.log("balances.summary",balances);
  return (
    <StyledDiv className={className}>
      
      
      <Summary balance={balances.summary} />
      
      <div style={{display:'none'}}>
      {!isNextTick || !sortedAccounts.length
        ? (
        //   <Table
        //     empty={isNextTick && sortedAccounts && t("You don't have any accounts. Some features are currently hidden and will only become available once you have accounts.")}
        //     header={header.accounts}
        //   />
        <div></div>
        )
        : GROUP_ORDER.map((group) =>
          groups[group]
        )
      }
      </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  .ui--Dropdown {
    width: 15rem;
  }

  .header-box {
    .dropdown-section {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .ui--Button-Group {
      margin-left: auto;
    }
  }
`;

export default React.memo(BalanceSummary);
