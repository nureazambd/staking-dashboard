// Copyright 2017-2024 @polkadot/app-accounts authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AccountBalance } from '../types.js';

import React from 'react';

// import { CardSummary, SummaryBox } from '@polkadot/react-components';
import { FormatBalance } from '@polkadot/react-query';

// import { useTranslation } from '../translate.js';

interface Props {
  className?: string;
  balance?: AccountBalance;
}

function Summary ({ balance }: Props) {
  // const { t } = useTranslation();

  const containerStyle = {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '',
    padding: '20px',
    minHeight: '20vh',
    color: '#1F2937',
  };

  const balanceContainerStyle = {
    backgroundColor: '',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    marginBottom: '10px',
  };

  const balanceStyle = {
    fontSize: '32px',
    fontWeight: '700',
    color: '#d33079',
    marginBottom: '10px',
  };

  const infoStyle = {
    fontSize: '16px',
    marginBottom: '5px',
    marginTop: '20px'
  };

  // const resourceContainerStyle = {
  //   backgroundColor: '#fff',
  //   padding: '20px',
  //   borderRadius: '8px',
  //   boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
  // };

  // const resourceLinkStyle = {
  //   display: 'block',
  //   fontSize: '16px',
  //   color: '#3B82F6',
  //   textDecoration: 'none',
  //   marginBottom: '5px',
  // };

  return (
    // <SummaryBox >
    //   <CardSummary label={t('total balance')}>
    //     <FormatBalance
    //       className={balance ? '' : '--tmp'}
    //       value={balance?.total || 1}
    //     />
    //   </CardSummary>
    //   <CardSummary
    //     className='media--900'
    //     label={t('total transferrable')}
    //   >
    //     <FormatBalance
    //       className={balance ? '' : '--tmp'}
    //       value={balance?.transferrable || 1}
    //     />
    //   </CardSummary>
    //   <CardSummary label={t('total locked')}>
    //     <FormatBalance
    //       className={balance ? '' : '--tmp'}
    //       value={balance?.locked || 1}
    //     />
    //   </CardSummary>
    //   {balance?.bonded.gtn(0) &&
    //     <CardSummary
    //       className='media--1100'
    //       label={t('bonded')}
    //     >
    //       <FormatBalance value={balance.bonded} />
    //     </CardSummary>}
    //   {balance?.redeemable.gtn(0) &&
    //     <CardSummary
    //       className='media--1500'
    //       label={t('redeemable')}
    //     >
    //       <FormatBalance value={balance.redeemable} />
    //     </CardSummary>}
    //   {balance?.unbonding.gtn(0) &&
    //     <CardSummary
    //       className='media--1300'
    //       label={t('unbonding')}
    //     >
    //       <FormatBalance value={balance.unbonding} />
    //     </CardSummary>}
    // </SummaryBox>
    <div style={containerStyle}>
      <div style={balanceContainerStyle}>
        <div style={titleStyle}>Balance</div>
        <div style={balanceStyle}>
        <FormatBalance
          className={balance ? '' : '--tmp'}
          value={balance?.total || 1}
        />
        </div>

        <div style={infoStyle}>Total Transferrable</div>

        <div style={{ marginTop:"10px", width:'100%', background:"gray", color:'white', padding:"10px", borderRadius:"5px"}}>
        <h1><FormatBalance
          className={balance ? '' : '--tmp'}
          value={balance?.transferrable || 1}
        /></h1>
        </div>

        <div style={{ display: "flex", marginBottom: "0px", paddingBottom: "0px", marginTop: "10px" }}>

          <div style={{ marginTop: "10px", width: '60%', color: 'black', padding: "10px", borderRadius: "5px" }}>
            <div style={infoStyle}>Total Locked</div>
          </div>

          <div style={{ marginTop: "10px", marginLeft: "5%", width: '35%', color: 'black', padding: "10px", borderRadius: "5px" }}>
            <div style={infoStyle}>Unbonding</div>
          </div>

        </div>

        <div style={{ display:"flex", marginTop:"0px", paddingTop:"0px"}}>
            
            <div style={{ marginTop:"10px", width:'60%', background:"gray", color:'white', padding:"10px", borderRadius:"5px"}}>
                <h1 style={{ marginBottom:"0px", paddingBottom:"0px"}}>
                <FormatBalance
          className={balance ? '' : '--tmp'}
          value={balance?.locked || 1}
        />
                </h1>
            </div>

            <div style={{ marginTop:"10px", marginLeft:"5%", width:'35%', background:"gray", color:'white', padding:"10px", borderRadius:"5px"}}>
            <h1><FormatBalance value={balance?.unbonding} /></h1>
            </div>
            
        </div>

        {/* <div style={infoStyle}>Free: 0 DOT</div> */}
        {/* <div style={infoStyle}>Reserve Balance: 0 DOT</div> */}
      </div>
      {/* <div style={resourceContainerStyle}>
        <div style={titleStyle}>More Resources</div>
        <a href="https://subscan.io/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          Subscan
        </a>
        <a href="https://polkawatch.app/" target="_blank" rel="noopener noreferrer" style={resourceLinkStyle}>
          Polkawatch
        </a>
      </div> */}
    </div>


    // <div>
    //   <div >
    //     <label style={{textTransform: "capitalize"}}>Balance</label>
    //   <FormatBalance
    //       className={balance ? '' : '--tmp'}
    //       value={balance?.total || 1}
    //     />
    //   </div>
    // </div>
  );
}

export default React.memo(Summary);
