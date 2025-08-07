import React from 'react';

function ContactUs() {
  const containerStyle = {
    textAlign: 'center',
    padding: '40px',
    fontFamily: 'sans-serif'
  };

  const cardStyle = {
    display: 'inline-block',
    padding: '30px',
    border: '1px solid #ddd',
    borderRadius: '10px',
    backgroundColor: '#fffaf5',
    maxWidth: '400px'
  };

  const textStyle = {
    marginBottom: '10px',
    fontSize: '16px',
    color: '#333'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#d35400' }}>📬 Contact Us</h2>
      <div style={cardStyle}>
        <p style={textStyle}>📧 Email: pawsandtails@community.com</p>
        <p style={textStyle}>📞 Phone: +91-9876543210</p>
        <p style={textStyle}>📍 Location: Chennai, India</p>
      </div>
    </div>
  );
}

export default ContactUs;
