// Copyright 2017-2024 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveStakingOverview } from '@polkadot/api-derive/types';
import type { SortedTargets } from '../types.js';

import React from 'react';

import SummarySession from '@polkadot/app-explorer/SummarySession';
import { CardSummary, styled, SummaryBox } from '@polkadot/react-components';
import { formatNumber } from '@polkadot/util';

import { useTranslation } from '../translate.js';

interface Props {
  className?: string;
  nominators?: string[];
  stakingOverview?: DeriveStakingOverview;
  targets: SortedTargets;
}

function Summary ({ className = '', stakingOverview, targets: { counterForNominators, inflation: { idealStake, inflation, stakedFraction }, nominators, waitingIds } }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const percent = <span className='percent'>%</span>;

  return (
    <StyledSummaryBox className={className}>
      {/* <span style={{ background:"#2d292d"}}> */}

      <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
      UI/UX Review Check
    </h5>
    <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div className="p-6 pt-0">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
      type="button">
      Read More
    </button>
  </div>
</div>
      <section style={{ background:"#C0C0C0", color:"#000000", borderRadius:"10px", padding:"25px"}}>
        {/* <CardSummary label={t('validators')}> */}
        <CardSummary label={t('validators')}>
          {stakingOverview
            ? <>{formatNumber(stakingOverview.validators.length)}&nbsp;/&nbsp;{formatNumber(stakingOverview.validatorCount)}</>
            : <span className='--tmp'>999 / 999</span>
          }
        </CardSummary>
        {/* <div>
          <label>validators</label>
          {stakingOverview
            ? <>{formatNumber(stakingOverview.validators.length)}&nbsp;/&nbsp;{formatNumber(stakingOverview.validatorCount)}</>
            : <span className='--tmp'>999 / 999</span>
          }
        </div> */}
        
        <CardSummary
          className='media--900'
          label={t('waiting')}
        >
          {waitingIds
            ? formatNumber(waitingIds.length)
            : <span className='--tmp'>99</span>
          }
        </CardSummary>
        <CardSummary
          className='media--1000'
          label={
            counterForNominators
              ? t('active / nominators')
              : t('nominators')
          }
        >
          
          {nominators
            ? (
              <>
                {formatNumber(nominators.length)}
                {counterForNominators && (
                  <>&nbsp;/&nbsp;{formatNumber(counterForNominators)}</>
                )}
              </>
            )
            : <span className='--tmp'>999 / 999</span>
          }
        </CardSummary>
        
      </section>
      {/* </span> */}
      <section style={{ background:"#C0C0C0", color:"#000000", borderRadius:"10px", padding:"25px"}}>
        {(idealStake > 0) && Number.isFinite(idealStake) && (
          <CardSummary
            className='media--1400'
            label={t('ideal staked')}
          >
            <>{(idealStake * 100).toFixed(1)}{percent}</>
          </CardSummary>
        )}
        {(stakedFraction > 0) && (
          <CardSummary
            className='media--1300'
            label={t('staked')}
          >
            <>{(stakedFraction * 100).toFixed(1)}{percent}</>
          </CardSummary>
        )}
        {(inflation > 0) && Number.isFinite(inflation) && (
          <CardSummary
            className='media--1200'
            label={t('inflation')}
          >
            <>{inflation.toFixed(1)}{percent}</>
          </CardSummary>
        )}
      </section>
      <section style={{ background:"#C0C0C0", color:"#000000", borderRadius:"10px", padding:"25px"}}>
        <SummarySession />
      </section>
    </StyledSummaryBox>
  );
}

const StyledSummaryBox = styled(SummaryBox)`
  .validator--Account-block-icon {
    display: inline-block;
    margin-right: 0.75rem;
    margin-top: -0.25rem;
    vertical-align: middle;
  }

  .validator--Summary-authors {
    .validator--Account-block-icon+.validator--Account-block-icon {
      margin-left: -1.5rem;
    }
  }

  // .percent {
  //   font-size: var(--font-percent-tiny);
  // }
  .percent {
    font-size: var(--font-percent-tiny);
  }
  
  
`;

export default React.memo(Summary);
