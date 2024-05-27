// Copyright 2017-2024 @polkadot/app-extrinsics authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api/types';
import type { RawParam } from '@polkadot/react-params/types';
import type { DecodedExtrinsic } from './types.js';

import React, { useCallback, useState } from 'react';

import { Button, InputAddress, MarkError, TxButton } from '@polkadot/react-components';
import { useApi } from '@polkadot/react-hooks';
import { Extrinsic } from '@polkadot/react-params';
import { BalanceFree } from '@polkadot/react-query';

import { useTranslation } from './translate.js';

interface Props {
  className?: string;
  defaultValue: DecodedExtrinsic | null;
}

interface DefaultExtrinsic {
  defaultArgs?: RawParam[];
  defaultFn: SubmittableExtrinsicFunction<'promise'>;
}

function extractDefaults (value: DecodedExtrinsic | null, defaultFn: SubmittableExtrinsicFunction<'promise'>): DefaultExtrinsic {
  if (!value) {
    // console.log("defaultFn",defaultFn);
    
    return { defaultFn };
  }
  
  return {
    defaultArgs: value.call.args.map((value) => ({
      isValid: true,
      value
    })),
    defaultFn: value.fn
    
  };
  
}

function Selection ({ defaultValue }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  // const { apiDefaultTxSudo } = useApi();
  const { api } = useApi();

  const [accountId, setAccountId] = useState<string | null>(null);
  // const [error, setError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [extrinsic, setExtrinsic] = useState<SubmittableExtrinsic<'promise'> | null>(null);
  // const [{ defaultArgs, defaultFn }] = useState<DefaultExtrinsic>(() => extractDefaults(defaultValue, api.tx.staking.bond));
  const [{ defaultArgs, defaultFn }] = useState<DefaultExtrinsic>(() => extractDefaults(defaultValue, api.tx.staking.bond));



  // const _onExtrinsicChange = useCallback(
  //   (method?: SubmittableExtrinsic<'promise'>) =>
  //     setExtrinsic(() => method || null),
  //   [4]
  // );

  const _onExtrinsicChange = useCallback(
    (method?: SubmittableExtrinsic<'promise'>) =>
      setExtrinsic(() => method || null),
      []
  );
  

  

  // const _onExtrinsicError = useCallback(
  //   (error?: Error | null) =>
  //     setError(error ? error.message : null),
  //   []
  // );

  const _onExtrinsicError = useCallback(
    (error?: Error | null) =>
      setError(error? error.message : null),
    []
  );

  return (
    // <div className={className}>
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
    {/* // <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', background: '#C0C0C0', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>  */}
    <h2 style={{ textAlign: 'center', color: '#333' }}>Submit Staking Transaction</h2>
      {/* <div style={{ padding:'30px', paddingTop:'60px'}}>
      <InputAddress
        label={t('using the selected account')}
        labelExtra={
          <BalanceFree
            label={<label>{t('free balance')}</label>}
            params={accountId}
          />
        }
        onChange={setAccountId}
        type='account'
      />
     
      <Extrinsic
        defaultArgs={defaultArgs}
        defaultValue={defaultFn}
        label={t('submit the following extrinsic')}
        onChange={_onExtrinsicChange}
        onError={_onExtrinsicError}
      />
      <Decoded
        extrinsic={extrinsic}
        isCall
      />
      {error && !extrinsic && (
        <MarkError content={error} />
      )}
      <Button.Group>
        <TxButton
          extrinsic={extrinsic}
          icon='sign-in-alt'
          isUnsigned
          label={t('Submit Unsigned')}
          withSpinner
        />
        <TxButton
          accountId={accountId}
          extrinsic={extrinsic}
          icon='sign-in-alt'
          label={t('Submit Transaction')}
        />
      </Button.Group>
      </div> */}


      <div className="container" style={{ margin: '20px 0' }}>
        {/* <form id="contact" action="" method="post"> */}
          {/* <h3>Colorlib Contact Form</h3>
          <h4>Contact us for custom quote</h4> */}
          <label style={{ fontSize: '16px', color: '#333' }}>Selected Account</label>
          <fieldset>
          <InputAddress
        // label={t('selected account')}
        labelExtra={
          <BalanceFree
            // label={<label>{t('free balance')}</label>}
            label={<span style={{ color: '#333' }}>{t('Free Balance')}</span>}
            params={accountId}
          />
        }
        onChange={setAccountId}
        type='account'
      />
          </fieldset>

          <label style={{ fontSize: '16px', color: '#333', marginTop:"10px" }}>
          Staking Transaction
          </label>
          <fieldset>
          <Extrinsic
        defaultArgs={defaultArgs}
        defaultValue={defaultFn}
        // label={t('submit the following extrinsic')}
        onChange={_onExtrinsicChange}
        onError={_onExtrinsicError}
      />
          </fieldset>
          <fieldset style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          {error && !extrinsic && (
        <MarkError content={error} />
      )}
          <Button.Group>
        {/* <span style={{ background:"blue", paddingTop:"10px", paddingBottom:"10px", paddingRight:"2px", paddingLeft:"2px", borderRadius:"10px"}}> */}
        <TxButton
          extrinsic={extrinsic}
          icon='sign-in-alt'
          isUnsigned
          label={t('Submit Unsigned')}
          withSpinner
        />
        {/* </span> */}
        {/* <span style={{ background:"blue", paddingTop:"10px", paddingBottom:"10px", paddingRight:"2px", paddingLeft:"2px", borderRadius:"10px", marginLeft:"10px"}}> */}
        <TxButton
          accountId={accountId}
          extrinsic={extrinsic}
          icon='sign-in-alt'
          label={t('Submit Transaction')}
        />
        {/* </span> */}
      </Button.Group>
          </fieldset>
          {/* <fieldset>
            <input placeholder="Your Web Site (optional)" type="url" required />
          </fieldset>
          <fieldset>
            <textarea placeholder="Type your message here...." required></textarea>
          </fieldset>
          <fieldset>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
          </fieldset> */}
          {/* <p className="copyright">Designed by <a href="https://colorlib.com" target="_blank" title="Colorlib">Colorlib</a></p> */}
        {/* </form> */}
      </div>

    </div>
  );
}

export default React.memo(Selection);
