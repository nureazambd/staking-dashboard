import React from 'react';

const Dialog = ({ isOpen, onClose }:any) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.dialog}>
      <h2 style={{ marginBottom:"20px"}}>Connect</h2>
        {/* <div style={{ display:"flex"}}>
        <h2 style={{ marginBottom:"20px"}}>Connect</h2>
        <button onClick={onClose} style={styles.closeButton}>x</button>
        </div> */}
        {/* <p>This is a dialog box.</p> */}
        <div>
          <h2 style={{ background:"gray", padding:"5px", borderRadius:"5px", width:"100px" }}>Extensions</h2>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: "5px" }}>
            {/* <div style={{ width: '300px', padding:"15px", margin: '20px auto', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden', fontFamily: 'Arial', background: 'gray' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png" alt="Card Image" style={{ width: '50px', height: 'auto' }} />
                <div style={{ padding: '0px' }}>
                  <h3 style={{ margin: '0 0 10px', color: "white" }}>MetaMask Snap (Chainsafe)</h3>
                  <a href="https://snaps.metamask.io/snap/npm/chainsafe/polkadot-snap/" style={{ display: 'inlineBlock', padding: "10px 0px", color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>snaps.metamask.io</a>
                </div>
              </div> */}

              <div style={{ width: '300px', padding:"15px", margin: '20px auto', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden', fontFamily: 'Arial', background: 'gray' }}>
                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjE1IDE1IDE0MCAxNDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE3MCAxNzA7em9vbTogMTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LmJnMHtmaWxsOiNGRjhDMDB9IC5zdDB7ZmlsbDojRkZGRkZGfTwvc3R5bGU+PGc+PGNpcmNsZSBjbGFzcz0iYmcwIiBjeD0iODUiIGN5PSI4NSIgcj0iNzAiPjwvY2lyY2xlPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik04NSwzNC43Yy0yMC44LDAtMzcuOCwxNi45LTM3LjgsMzcuOGMwLDQuMiwwLjcsOC4zLDIsMTIuM2MwLjksMi43LDMuOSw0LjIsNi43LDMuM2MyLjctMC45LDQuMi0zLjksMy4zLTYuNyBjLTEuMS0zLjEtMS42LTYuNC0xLjUtOS43QzU4LjEsNTcuNiw2OS41LDQ2LDgzLjYsNDUuM2MxNS43LTAuOCwyOC43LDExLjcsMjguNywyNy4yYzAsMTQuNS0xMS40LDI2LjQtMjUuNywyNy4yIGMwLDAtNS4zLDAuMy03LjksMC43Yy0xLjMsMC4yLTIuMywwLjQtMywwLjVjLTAuMywwLjEtMC42LTAuMi0wLjUtMC41bDAuOS00LjRMODEsNzMuNGMwLjYtMi44LTEuMi01LjYtNC02LjIgYy0yLjgtMC42LTUuNiwxLjItNi4yLDRjMCwwLTExLjgsNTUtMTEuOSw1NS42Yy0wLjYsMi44LDEuMiw1LjYsNCw2LjJjMi44LDAuNiw1LjYtMS4yLDYuMi00YzAuMS0wLjYsMS43LTcuOSwxLjctNy45IGMxLjItNS42LDUuOC05LjcsMTEuMi0xMC40YzEuMi0wLjIsNS45LTAuNSw1LjktMC41YzE5LjUtMS41LDM0LjktMTcuOCwzNC45LTM3LjdDMTIyLjgsNTEuNiwxMDUuOCwzNC43LDg1LDM0Ljd6IE04Ny43LDEyMS43IGMtMy40LTAuNy02LjgsMS40LTcuNSw0LjljLTAuNywzLjQsMS40LDYuOCw0LjksNy41YzMuNCwwLjcsNi44LTEuNCw3LjUtNC45QzkzLjMsMTI1LjcsOTEuMiwxMjIuNCw4Ny43LDEyMS43eiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+Cg==" alt="Card Image" style={{ width: '50px', height: 'auto' }} />
                <div style={{ padding: '0px' }}>
                  <h3 style={{ margin: '0 0 10px', color: "white" }}>Polkadot JS</h3>
                  {/* <p style={{ margin: "0 0 15px", color: '#666' }}>This is a brief description of the card content. It provides an overview of what the card is about.</p> */}
                  <a href="https://polkadot.js.org/extension/" style={{ display: 'inlineBlock', padding: "10px 0px", color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>polkadot.js.org/extension</a>
                </div>
              </div>
            </div>

            {/* <div style={{ marginLeft: "5px" }}>
              <div style={{ width: '300px', padding:"15px", margin: '20px auto', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', overflow: 'hidden', fontFamily: 'Arial', background: 'gray' }}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/512px-MetaMask_Fox.svg.png" alt="Card Image" style={{ width: '50px', height: 'auto' }} />
                <div style={{ padding: '0px' }}>
                  <h3 style={{ margin: '0 0 10px', color: "white" }}>MetaMask Snap (PolkaGate)</h3>
                  <a href="https://snaps.metamask.io/snap/npm/polkagate/snap/" style={{ display: 'inlineBlock', padding: "10px 0px", color: 'white', textDecoration: 'none', borderRadius: '5px', textAlign: 'center' }}>snaps.metamask.io</a>
                </div>
              </div>
            </div> */}

          </div>
        </div>
        {/* <button onClick={onClose} style={styles.closeButton}>Close</button> */}
        <button onClick={onClose} style={{ background:"gray", color:"white", padding:"5px", cursor: 'pointer', border:"none", borderRadius:"5px"}}>Close</button>

      </div>
    </div>
  );
};

const styles:any = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dialog: {
    background: '#C0C0C0',
    padding: '20px',
    borderRadius: '5px',
    maxWidth:'900px',
    minWidth:'580px',
    textAlign: 'left',
  },
  closeButton: {
    marginTop: '20px',
  },
};

export default Dialog;