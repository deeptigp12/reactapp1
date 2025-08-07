import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#f9f9f9',
    padding: '10px 20px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#777',
    borderTop: '1px solid #eee',
    marginTop: '40px'
  };

  return (
    <footer style={footerStyle}>
      © 2025 Paws & Tails 🐾. All rights reserved.
    </footer>
  );
}

export default Footer;
