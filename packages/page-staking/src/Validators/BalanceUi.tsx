import React from 'react';

const BalanceUI = () => {
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
    color: '#3B82F6',
    marginBottom: '10px',
  };

  const infoStyle = {
    fontSize: '16px',
    marginBottom: '5px',
  };

 

  return (
    <div style={containerStyle}>
      <div style={balanceContainerStyle}>
        <div style={titleStyle}>Balance</div>
        <div style={balanceStyle}>0.00</div>

        <div style={infoStyle}>Not Staking</div>

        <div style={{ marginTop:"10px", width:'100%', background:"gray", color:'white', padding:"10px", borderRadius:"5px"}}>0 DOT</div>

        <div style={{ display:"flex", marginBottom:"0px", paddingBottom:"0px", marginTop:"10px"}}>
            
            <div style={{ marginTop:"10px", width:'60%', color:'black', padding:"10px", borderRadius:"5px"}}>
                <h1>Free</h1>
            </div>

            <div style={{ marginTop:"10px", marginLeft:"5%", width:'35%', color:'black', padding:"10px", borderRadius:"5px"}}>Reserve Balance</div>
            
        </div>
        <div style={{ display:"flex", marginTop:"0px", paddingTop:"0px"}}>
            
            <div style={{ marginTop:"10px", width:'60%', background:"gray", color:'white', padding:"10px", borderRadius:"5px"}}>
                <h1 style={{ marginBottom:"0px", paddingBottom:"0px"}}>0 DOT</h1>
            </div>

            <div style={{ marginTop:"10px", marginLeft:"5%", width:'35%', background:"gray", color:'white', padding:"10px", borderRadius:"5px"}}>0 DOT</div>
            
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
  );
};

export default BalanceUI;
