// Copyright 2017-2024 @polkadot/app-staking authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Params } from './types.js';

import React from 'react';

import { CardSummary, SummaryBox } from '@polkadot/react-components';
import { formatNumber, isNumber } from '@polkadot/util';

// import { useTranslation } from '../translate.js';

interface Props {
  className?: string;
  params: Params;
  poolCount?: number;
}

function Summary ({ className, params: { maxMembers, maxMembersPerPool, maxPools }, poolCount }: Props): React.ReactElement<Props> | null {
  // const { t } = useTranslation();

  return (
    <SummaryBox className={className}>
      <div style={{ background:"#C0C0C0", color:"#000000", borderRadius:"10px", padding:"25px"}}>
      <CardSummary label={('pools')}>
        {isNumber(poolCount) && (
          <>
            {formatNumber(poolCount)}
            {maxPools > 0 && (
              <>&nbsp;/&nbsp;{formatNumber(maxPools)}</>
            )}
          </>
        )}
      </CardSummary>
      </div>

      
      <section>
      <div style={{ background:"#C0C0C0", color:"#000000", borderRadius:"10px", padding:"10px"}}>
        {maxMembers > 0 && (
          <CardSummary label={('max. members')}>
            {formatNumber(maxMembers)}
          </CardSummary>
        )}
        </div>
      <div style={{ background:"#C0C0C0", color:"#000000", borderRadius:"10px", marginLeft:"10px", padding:"10px"}}>
        {maxMembersPerPool > 0 && (
          <CardSummary label={('max. members / pool')}>
            {formatNumber(maxMembersPerPool)}
          </CardSummary>
        )}
      </div>
      </section>
      
    </SummaryBox>
  );
}

export default React.memo(Summary);
