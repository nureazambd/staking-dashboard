import React from 'react';

const PayoutsUI = () => {
  const containerStyle = {
    fontFamily: "'Inter', sans-serif",
    backgroundColor: '',
    padding: '20px',
    minHeight: '20vh',
  };

  const headerStyle = {
    backgroundColor: '',
    padding: '10px 20px',
    borderBottom: '1px solid #E5E7EB',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const titleStyle = {
    fontSize: '24px',
    fontWeight: '600',
    color: '#1F2937',
  };

  const searchContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  // const searchInputStyle = {
  //   padding: '8px 12px',
  //   border: '1px solid #E5E7EB',
  //   borderRadius: '4px',
  //   marginRight: '10px',
  //   fontSize: '14px',
  // };

  // const buttonStyle = {
  //   padding: '8px 16px',
  //   backgroundColor: '#3B82F6',
  //   color: '#fff',
  //   border: 'none',
  //   borderRadius: '4px',
  //   cursor: 'pointer',
  //   fontSize: '14px',
  // };

 

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={titleStyle}>Payouts</div>
        <div style={searchContainerStyle}>
          {/* <input type="text" placeholder="Search" style={searchInputStyle} />
          <button style={buttonStyle}>Search</button> */}
        </div>
      </div>
      {/* <div style={tableContainerStyle}>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Validator</th>
              <th style={thStyle}>Era</th>
              <th style={thStyle}>Amount</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Validator 1</td>
              <td style={tdStyle}>100</td>
              <td style={tdStyle}>100 DOT</td>
              <td style={tdStyle}>2024-05-19</td>
              <td style={tdStyle}>Completed</td>
            </tr>
            <tr>
              <td style={tdStyle}>Validator 2</td>
              <td style={tdStyle}>101</td>
              <td style={tdStyle}>200 DOT</td>
              <td style={tdStyle}>2024-05-20</td>
              <td style={tdStyle}>Pending</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default PayoutsUI;
