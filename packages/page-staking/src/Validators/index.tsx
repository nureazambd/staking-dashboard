// Copyright 2017-2024 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0
import type { DeriveHeartbeats, DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { StakerState } from '@polkadot/react-hooks/types';
import type { BN } from '@polkadot/util';
import type { NominatedByMap, SortedTargets } from '../types.js';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Button, ToggleGroup } from '@polkadot/react-components';
import { useApi, useBlockAuthors, useCall } from '@polkadot/react-hooks';

import { useTranslation } from '../translate.js';
import ActionsBanner from './ActionsBanner.js';
import CurrentList from './CurrentList.js';
import Summary from './Summary.js';

import PoolSummary from './PoolSummary.js';
import type { ActionStatus } from '@polkadot/react-components/Status/types';
// import PayoutsUI from './PayoutUi.js';
import BalanceSummary from '../overview-balance/Accounts/BalanceSummary.js';
import Payouts from '../Payouts/index.js';






interface Props {
  className?: string;
  favorites: string[];
  hasAccounts: boolean;
  hasQueries: boolean;
  minCommission?: BN;
  nominatedBy?: NominatedByMap;
  ownStashes?: StakerState[];
  paraValidators?: Record<string, boolean>;
  stakingOverview?: DeriveStakingOverview;
  targets: SortedTargets;
  toggleFavorite: (address: string) => void;
  toggleLedger?: () => void;
  toggleNominatedBy: () => void;
}

interface Props {
  className?: string;
  onStatusChange: (status: ActionStatus) => void;
}

const EMPTY_PARA_VALS: Record<string, boolean> = {};
const EMPTY_BY_AUTHOR: Record<string, string> = {};
const EMPTY_ERA_POINTS: Record<string, string> = {};

function Overview ({ className = '', favorites, hasAccounts, hasQueries, minCommission, nominatedBy, ownStashes, paraValidators, stakingOverview, targets, toggleFavorite, toggleLedger, toggleNominatedBy, onStatusChange }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const { byAuthor, eraPoints } = useBlockAuthors();
  const [intentIndex, _setIntentIndex] = useState(0);
  const [typeIndex, setTypeIndex] = useState(1);
  const recentlyOnline = useCall<DeriveHeartbeats>(api.derive.imOnline?.receivedHeartbeats);

  const setIntentIndex = useCallback(
    (index: number): void => {
      index && toggleNominatedBy();
      _setIntentIndex(index);
    },
    [toggleNominatedBy]
  );

  const filterOptions = useRef([
    { text: t('Own validators'), value: 'mine' },
    { text: t('All validators'), value: 'all' }
  ]);

  const intentOptions = useRef([
    { text: t('Active'), value: 'active' },
    { text: t('Waiting'), value: 'waiting' }
  ]);

  const ownStashIds = useMemo(
    () => ownStashes?.map(({ stashId }) => stashId),
    [ownStashes]
  );

  useEffect((): void => {
    toggleLedger && toggleLedger();
  }, [toggleLedger]);

  const isOwn = typeIndex === 0;
  // const params = useParams();
  // const ids = usePoolIds();



  return (
    <div className={`${className} staking--Overview`}>
      <div style={{marginTop:"25px", font:"18px", fontSize:"24px", fontWeight:900}}>Overview</div>
      <Summary
        stakingOverview={stakingOverview}
        targets={targets}
      />
      {hasAccounts && (ownStashes?.length === 0) && (
        <ActionsBanner />
      )}

      <div style={{ display:'flex', marginTop:"10px", marginBottom:"20px"}}>
          <div style={{ background:"#C0C0C0", borderRadius:"10px", padding:"15px", marginRight:"20px", width:"40%",height:"380px" }}>
            <div>
             
              <BalanceSummary onStatusChange={onStatusChange}/>
              
            </div>
          </div>
          <div style={{ background:"#C0C0C0", borderRadius:"10px", padding:"15px", marginLeft:"20px", width:"60%",height:"380px" }}>
            {/* <Payouts ownValidators={[]}/> */}
            <Payouts ownValidators={[]}/>
            {/* <PayoutsUI/> */}
          </div>
      </div>
      
      <div style={{ background:"#C0C0C0",color:"#000000", borderRadius:"10px", padding:"15px"}}>
      <PoolSummary/>
      
      </div>

      <Button.Group>
        <ToggleGroup
          onChange={setTypeIndex}
          options={filterOptions.current}
          value={typeIndex}
        />
        <ToggleGroup
          onChange={setIntentIndex}
          options={intentOptions.current}
          value={intentIndex}
        />
      </Button.Group>

      {/* <Summary2  params={params}
        poolCount={ids?.length}/> */}

        {/* <PoolsOverview/> */}
      
      <CurrentList
        byAuthor={intentIndex === 0 ? byAuthor : EMPTY_BY_AUTHOR}
        eraPoints={intentIndex === 0 ? eraPoints : EMPTY_ERA_POINTS}
        favorites={favorites}
        hasQueries={hasQueries}
        isIntentions={intentIndex === 1}
        isOwn={isOwn}
        key={intentIndex}
        minCommission={intentIndex === 0 ? minCommission : undefined}
        nominatedBy={intentIndex === 1 ? nominatedBy : undefined}
        ownStashIds={ownStashIds}
        paraValidators={(intentIndex === 0 && paraValidators) || EMPTY_PARA_VALS}
        recentlyOnline={intentIndex === 0 ? recentlyOnline : undefined}
        stakingOverview={stakingOverview}
        targets={targets}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default React.memo(Overview);
