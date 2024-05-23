
import useParams from '@polkadot/app-staking2/Pools/useParams';

import Summary from './Pools/Summary.js';
// import useParams from './Pools/useParams.js';
import usePoolIds from './Pools/usePoolIds.js';
import React from 'react';




function PoolSummary () {
  const params = useParams();
  const ids = usePoolIds();
  return (
    <div className={` staking--Overview`}>
     
     <Summary
        params={params}
        poolCount={ids?.length}
        />
      
    </div>
  );
}

export default React.memo(PoolSummary);
