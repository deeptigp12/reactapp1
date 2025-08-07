import React from 'react';

function Signup() {
  const containerStyle = {
    maxWidth: '500px',
    margin: '80px auto',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    fontFamily: 'sans-serif',
    backgroundColor: '#fff',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#d35400',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#d35400',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Sign Up</h2>
      <form>
        <input type="text" placeholder="Full Name" style={inputStyle} required />
        <input type="email" placeholder="Email" style={inputStyle} required />
        <input type="password" placeholder="Create Password" style={inputStyle} required />
        <input type="password" placeholder="Confirm Password" style={inputStyle} required />
        <button type="submit" style={buttonStyle}>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
