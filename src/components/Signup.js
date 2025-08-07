import React from 'react';

function Signup() {
  const formStyle = {
    maxWidth: '450px',
    margin: '50px auto',
    padding: '25px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fffaf5'
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc'
  };

  const buttonStyle = {
    padding: '10px 15px',
    backgroundColor: '#d35400',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%'
  };

  return (
    <div style={formStyle}>
      <h2 style={{ textAlign: 'center' }}>📝 Sign Up</h2>
      <input type="text" placeholder="Name" style={inputStyle} />
      <input type="email" placeholder="Email" style={inputStyle} />
      <input type="password" placeholder="Create Password" style={inputStyle} />
      <input type="password" placeholder="Confirm Password" style={inputStyle} />
      <button style={buttonStyle}>Register</button>
    </div>
  );
}

export default Signup;
