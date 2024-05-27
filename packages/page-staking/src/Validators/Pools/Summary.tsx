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
    <section className="grid my-10 md:grid-cols-1 xl:grid-cols-1 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          
          <div className=' flex'>
          <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <div>
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
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          </div>
          <div>
          {maxMembers > 0 && (
          <CardSummary label={('max. members')}>
            {formatNumber(maxMembers)}
          </CardSummary>
        )}
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
            </svg>
          </div>
          <div>
          {maxMembersPerPool > 0 && (
          <CardSummary label={('max. members / pool')}>
            {formatNumber(maxMembersPerPool)}
          </CardSummary>
        )}
          </div>
        </div>
      </section>
          </div>
        </div>
      </section>
  );
}

export default React.memo(Summary);
