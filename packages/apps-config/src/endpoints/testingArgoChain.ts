// Copyright 2017-2024 @polkadot/apps-config authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { EndpointOption } from './types.js';

// import { chains3dpassSVG, chainsAcalaSVG, chainsAlephSVG, chainsAllfeatSVG, chainsBrainstormPNG, chainsChainflipPNG, chainsCreditcoinTestPNG, chainsDebioSVG, chainsEquilibriumSVG, chainsFerrumPNG, chainsFragnovaPNG, chainsJurPNG, chainsKintsugiPNG, chainsLiberlandPNG, chainsLogionPNG, chainsMyriadPNG, chainsShidenPNG, chainsSkyekiwiPNG, chainsTanglePNG, chainsVaraTestnetPNG } from '../ui/logos/chains/index.js';
import { nodesArgochain20kbPNG} from '../ui/logos/nodes/index.js';

export * from './testingRelayRococo.js';
export * from './testingRelayWestend.js';

// The available endpoints that will show in the dropdown. For the most part (with the exception of
// Polkadot) we try to keep this to live chains only, with RPCs hosted by the community/chain vendor
//   info: The chain logo name as defined in ../ui/logos/index.ts in namedLogos (this also needs to align with @polkadot/networks)
//   text: The text to display on the dropdown
//   providers: The actual hosted secure websocket endpoint
//
// IMPORTANT: Alphabetical based on text
export const argoChains: Omit<EndpointOption, 'teleport'>[] = [
  {
    info: 'automata-contextfree',
    providers: {
      'ArgoChain': 'wss://explorer.devolvedai.com',
      // OnFinality: 'wss://blockchain.devolvedai.com'
    },
    text: 'ArgoChain Testnet',
    ui: {
      // color: '#EC7032',
      color: '#1d4ed8',
      logo: nodesArgochain20kbPNG
    }
  },

];
