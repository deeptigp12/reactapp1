import React from 'react';

function Header() {
  const navStyle = {
    backgroundColor: '#fefefe',
    padding: '15px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ddd',
    flexWrap: 'wrap',
    fontFamily: 'sans-serif',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  };

  const logoStyle = {
    color: '#d35400',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    flex: '1 0 100%',
    textAlign: 'center'
  };

  const linksWrapper = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
    width: '100%',
    marginBottom: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#333',
    fontSize: '1rem',
    padding: '8px 14px',
    border: '1px solid transparent',
    borderRadius: '6px',
    transition: '0.3s',
  };

  return (
    <>
      <style>
        {`
          @media (min-width: 768px) {
            .header-nav {
              flex-direction: row;
            }
            .logo {
              flex: 0;
              text-align: left;
              margin-bottom: 0;
            }
            .links-wrapper {
              justify-content: flex-end;
              gap: 16px;
            }
          }

          a:hover {
            background-color: #d35400;
            color: #fff !important;
            border-color: #d35400;
          }
        `}
      </style>

      <nav style={navStyle} className="header-nav">
        <div className="logo" style={logoStyle}>🐾 Paws & Tails</div>
        <div className="links-wrapper" style={linksWrapper}>
          <a href="/" style={linkStyle}>Home</a>
          <a href="/dashboard" style={linkStyle}>Dashboard</a>
          <a href="/gallery" style={linkStyle}>Gallery</a>
          <a href="/login" style={linkStyle}>Login</a>
          <a href="/signup" style={linkStyle}>Signup</a>
          <a href="/contactus" style={linkStyle}>Contact Us</a>
        </div>
      </nav>
    </>
  );
}

export default Header;
