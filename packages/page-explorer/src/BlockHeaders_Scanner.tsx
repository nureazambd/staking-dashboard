// Copyright 2017-2024 @polkadot/app-explorer authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HeaderExtended } from '@polkadot/api-derive/types';

import React, { useRef } from 'react';

import { Table } from '@polkadot/react-components';

// import BlockHeader from './BlockHeader.js';
import { useTranslation } from './translate.js';
import BlockHeader_Scanner from './BlockHeader_Scanner.js';

interface Props {
  headers: HeaderExtended[];
}

function BlockHeaders_Scanner ({ headers }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const headerRef = useRef<([React.ReactNode?, string?, number?] | false)[]>([
    [t('Latest Transactions'), 'start', 3]
  ]);

  return (
    <Table
      empty={t('No blocks available')}
      header={headerRef.current}
    >
      {headers
        .filter((header) => !!header)
        .map((header): React.ReactNode => (
          // <BlockHeader
          //   key={header.number.toString()}
          //   value={header}
          // />
          <BlockHeader_Scanner
          key={header.number.toString()}
          value={header}
          />
        ))}
    </Table>
  );
}

export default React.memo(BlockHeaders_Scanner);
