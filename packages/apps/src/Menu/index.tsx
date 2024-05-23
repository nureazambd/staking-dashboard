// Copyright 2017-2024 @polkadot/apps authors & contributors
// SPDX-License-Identifier: Apache-2.0


import React, { useState } from 'react';

// import { Button, styled } from '@polkadot/react-components';
import { styled } from '@polkadot/react-components';

import {useApi } from '@polkadot/react-hooks';

import ChainInfoLogo from './ChainLogo.js';
import Dialog from './Dialog.js';


interface Props {
  className?: string;
}



function Menu ({ className = '' }: Props): React.ReactElement<Props> {
  const apiProps = useApi();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  // const [buttonColor, setButtonColor] = useState('#C0C0C0');

  const [buttonColor1, setButtonColor1] = useState('#C0C0C0');
  const [homeUrl, setHomeUrl] = useState('/');
  const handleClick1 = () => {
    setButtonColor1('#d33079'); // Change to your desired color
    setButtonColor2('#C0C0C0');
    setButtonColor3('#C0C0C0');
    setButtonColor4('#C0C0C0');
    setHomeUrl('/#/staking');
    setButtonColor5('#C0C0C0');
    setButtonColor6('#C0C0C0');

  };

  const [buttonColor2, setButtonColor2] = useState('#C0C0C0');
  const handleClick2 = () => {
    setButtonColor2('#d33079'); // Change to your desired color
    setButtonColor1('#C0C0C0');
    setButtonColor3('#C0C0C0');
    setButtonColor4('#C0C0C0');
    setButtonColor5('#C0C0C0');
    setButtonColor6('#C0C0C0');

  };

  const [buttonColor3, setButtonColor3] = useState('#C0C0C0');
  const handleClick3 = () => {
    setButtonColor3('#d33079'); // Change to your desired color
    setButtonColor1('#C0C0C0');
    setButtonColor2('#C0C0C0');
    setButtonColor4('#C0C0C0');
    setButtonColor5('#C0C0C0');
    setButtonColor6('#C0C0C0');


  };

  const [buttonColor4, setButtonColor4] = useState('#C0C0C0');
  const handleClick4 = () => {
    setButtonColor4('#d33079')
    setButtonColor3('#C0C0C0'); // Change to your desired color
    setButtonColor1('#C0C0C0');
    setButtonColor2('#C0C0C0');
    setButtonColor5('#C0C0C0');
    setButtonColor5('#C0C0C0');
    setButtonColor6('#C0C0C0');

  };

  const [buttonColor5, setButtonColor5] = useState('#C0C0C0');
  const handleClick5 = () => {
    setButtonColor5('#d33079');
    setButtonColor4('#C0C0C0');
    setButtonColor3('#C0C0C0'); // Change to your desired color
    setButtonColor1('#C0C0C0');
    setButtonColor2('#C0C0C0');
    setButtonColor6('#C0C0C0');
  };

  const [buttonColor6, setButtonColor6] = useState('#C0C0C0');
  const handleClick6 = () => {
    setButtonColor6('#d33079');
    setButtonColor5('#C0C0C0');
    setButtonColor4('#C0C0C0');
    setButtonColor3('#C0C0C0'); // Change to your desired color
    setButtonColor1('#C0C0C0');
    setButtonColor2('#C0C0C0');
  };

  // useEffect(()=>{
  //   handleClick1()
  // },[])


  return (
    <StyledDiv className={`${className}${(!apiProps.isApiReady || !apiProps.isApiConnected) ? ' isLoading' : ''} highlight--bg`}>
      <div style={{marginBottom:"100px"}}>
        
        <div style={{position: "fixed",
        top: '0',
            width: '100%',
            background:'#333',
            color: "#fff",
            padding: "10px 20px",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: '1000'
        }}
            >
            {/* <!-- Icon --> */}
            <div style={{display: 'flex', alignItems: 'center'}}>
                {/* <img src="https://via.placeholder.com/40" alt="Icon" style={{width: "40px", height: "40px", marginRight: "10px"}}/> */}
                <ChainInfoLogo/>
                <h1 style={{margin: '0', fontSize: '24px', textTransform: 'capitalize'}}>Argochain Staking</h1>
            </div>
        
            {/* <!-- Navigation Links --> */}
                      <nav style={{ display: 'flex', gap: '15px' }}>
                          {/* <a href="#" style={{color: '#fff', textDecoration: 'none'}}>Home</a> */}
                          <a onClick={handleClick1} href={homeUrl}  style={{ background: buttonColor1, color: "black", padding: "10px 10px", marginLeft: "8px", marginRight: "8px", textAlign: "center", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
                              <svg style={{ marginRight: "2px", color: "white", width: "16px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                  <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
                              </svg> 
                              <samp style={{ fontSize: "20px" }}><a style={{ color: 'black' }}>Overview</a></samp>
                          </a>
                          <a onClick={handleClick2} href="/#/staking/pools" style={{ background: buttonColor2, color: "black", padding: "10px 10px", marginLeft: "8px", marginRight: "8px", textAlign: "center", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
                              <svg style={{ marginRight: "4px", color: "white", width: "16px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                              <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"/>
                              </svg>
                              <samp style={{ fontSize: "20px" }}><a style={{ color: '#000000' }} href="/#/staking/pools">Pools</a></samp>
                          </a>
                          <a onClick={handleClick3} href="/#/staking/actions" style={{ background: buttonColor3, color: "black", padding: "10px 10px", marginLeft: "8px", marginRight: "8px", textAlign: "center", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
                              <svg style={{ marginRight: "4px", color: "white", width: "16px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                              <path d="M384 160c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32V288c0 17.7-14.3 32-32 32s-32-14.3-32-32V205.3L342.6 374.6c-12.5 12.5-32.8 12.5-45.3 0L192 269.3 54.6 406.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160c12.5-12.5 32.8-12.5 45.3 0L320 306.7 466.7 160H384z"/>
                              </svg>
                              <samp style={{ fontSize: "20px" }}><a style={{ color: '#000000' }} href="/#/staking/actions">Nominate</a></samp>
                          </a>
                          <a onClick={handleClick4} href="/#/staking/payout" style={{ background: buttonColor4, color: "black", padding: "10px 10px", marginLeft: "8px", marginRight: "8px", textAlign: "center", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
                              <svg style={{ marginRight: "4px", color: "white", width: "16px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/>
                              </svg>
                              <samp style={{ fontSize: "20px" }}><a style={{ color: '#000000' }} href="/#/staking/payout">Payouts</a></samp>
                          </a>
                          <a onClick={handleClick5} href="/#/staking/targets" style={{ background: buttonColor5, color: "black", padding: "10px 10px", marginLeft: "8px", marginRight: "8px", textAlign: "center", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
                              <svg style={{ marginRight: "4px", color: "white", width: "16px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                              <path d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm48 160H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zM96 336c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16zM376 160h80c13.3 0 24 10.7 24 24v48c0 13.3-10.7 24-24 24H376c-13.3 0-24-10.7-24-24V184c0-13.3 10.7-24 24-24z"/>
                              </svg>
                              <samp style={{ fontSize: "20px" }}><a style={{ color: '#000000' }} href="/#/staking/targets">Validators</a></samp>
                          </a>
                          <a onClick={handleClick6} href="/#/extrinsics" style={{ background: buttonColor6, color: "black", padding: "10px 10px", marginLeft: "8px", marginRight: "8px", textAlign: "center", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
                              <svg style={{ marginRight: "4px", color: "white", width: "16px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"/>
                              </svg>
                              <samp style={{ fontSize: "20px" }}><a style={{ color: '#000000' }} href="/#/extrinsics">Staking</a></samp>
                          </a>
                      </nav>
        
          <nav style={{ display: 'flex', gap: '5px' }}>
            {/* <a href="https://devolvedai.com/" style={{color: '#fff', textDecoration: 'none'}}>Services</a> */}
            <button style={{ background: "#d33079", color: "white", padding: "5px 5px", marginLeft: "8px", marginRight: "2px", textAlign: "center", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }} onClick={openDialog}>
            <svg style={{ marginRight: "4px", marginLeft:"4px", color: "white", width: "10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="white" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H80c-8.8 0-16-7.2-16-16s7.2-16 16-16H448c17.7 0 32-14.3 32-32s-14.3-32-32-32H64zM416 272a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
            </svg>
              <samp style={{ fontSize: "16px" }}><a style={{ color: 'white' }}  target="_blank">Accounts</a></samp>
              <samp style={{ fontSize: "16px" }}><a style={{ color: 'gray' }}  target="_blank">|</a></samp>
              <svg style={{ marginRight: "4px", marginLeft:"4px", color: "white", width: "10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path fill="white" d="M96 0C78.3 0 64 14.3 64 32v96h64V32c0-17.7-14.3-32-32-32zM288 0c-17.7 0-32 14.3-32 32v96h64V32c0-17.7-14.3-32-32-32zM32 160c-17.7 0-32 14.3-32 32s14.3 32 32 32v32c0 77.4 55 142 128 156.8V480c0 17.7 14.3 32 32 32s32-14.3 32-32V412.8C297 398 352 333.4 352 256V224c17.7 0 32-14.3 32-32s-14.3-32-32-32H32z"/>
              </svg>
            </button>

            <button style={{ background: "#d33079", color: "white", padding: "5px 5px", marginLeft: "2px", marginRight: "8px", textAlign: "center", border: "none", borderRadius: "5px", cursor: "pointer", fontSize: "16px" }}>
            <svg style={{ marginRight: "4px", marginLeft:"4px", color: "white", width: "10px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="white" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
            </svg>
              <samp style={{ fontSize: "16px" }}><a style={{ color: 'white' }} href="https://devolvedai.com/" target="_blank">Contact</a></samp>
            </button>

            {/* <a href="https://devolvedai.com/" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a> */}
          </nav>
        </div>

        <Dialog isOpen={isDialogOpen} onClose={closeDialog}/>
            </div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  width: 100%;
  padding: 0;
  z-index: 220;
  position: relative;
 
  .smallShow {
    display: none;
  }

  & .menuContainer {
    flex-direction: row;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0 1.5rem;
    width: 100%;
    max-width: var(--width-full);
    margin: 0 auto;
  }

  &.isLoading {
    background: #999 !important;

    .menuActive {
      // background: var(--bg-page);
      background: #efeeee !important;

    }

    &:before {
      filter: grayscale(1);
    }

    .menuItems {
      filter: grayscale(1);
    }
  }

  .menuSection {
    align-items: center;
    display: flex;
  }

  .menuActive {
    background: var(--bg-tabs);
    border-bottom: none;
    border-radius: 0.25rem 0.25rem 0 0;
    // color: var(--color-text);
    color: white;
    padding: 1rem 1.5rem;
    margin: 0 1rem -1px;
    z-index: 1;

    .ui--Icon {
      margin-right: 0.5rem;
    }
  }

  .menuItems {
    flex: 1 1;
    list-style: none;
    margin: 0 1rem 0 0;
    padding: 0;

    > li {
      display: inline-block;
    }

    > li + li {
      margin-left: 0.375rem
    }
  }

  .ui--NodeInfo {
    align-self: center;
  }

  @media only screen and (max-width: 800px) {
    .groupHdr {
      padding: 0.857rem 0.75rem;
    }

    .smallShow {
      display: initial;
    }

    .smallHide {
      display: none;
    }

    .menuItems {
      margin-right: 0;

      > li + li {
        margin-left: 0.25rem;
      }
    }
  }
`;

export default React.memo(Menu);
