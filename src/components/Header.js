import React from 'react';

function Header() {
  const navStyle = {
    backgroundColor: '#fefefe',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    fontFamily: 'sans-serif'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    margin: '0 15px',
    fontSize: '16px'
  };

  return (
    <nav style={navStyle}>
      <h2 style={{ color: '#d35400' }}>🐾 Paws & Tails</h2>
      <div>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/dashboard" style={linkStyle}>Dashboard</a>
        <a href="/gallery" style={linkStyle}>Gallery</a>
        <a href="/login" style={linkStyle}>Login</a>
        <a href="/signup" style={linkStyle}>Signup</a>
        <a href="/contactus" style={linkStyle}>Contact Us</a>
      </div>
    </nav>
  );
}

export default Header;
