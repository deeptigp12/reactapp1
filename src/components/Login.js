import React from 'react';

function Login() {
  const formStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
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
      <h2 style={{ textAlign: 'center' }}>🔐 Login</h2>
      <input type="text" placeholder="Username or Email" style={inputStyle} />
      <input type="password" placeholder="Password" style={inputStyle} />
      <button style={buttonStyle}>Login</button>
    </div>
  );
}

export default Login;
