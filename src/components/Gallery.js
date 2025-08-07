import React from 'react';

function Gallery() {
  const containerStyle = {
    padding: '30px',
    textAlign: 'center'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginTop: '20px'
  };

  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <div style={containerStyle}>
      <h2 style={{ color: '#d35400' }}>📸 Dog Gallery</h2>
      <div style={gridStyle}>
                
        <img style={imgStyle} src="https://th.bing.com/th/id/OIP.mMWuzEPKzws6n-oi_7pAyQHaEo?w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Dog 1" />
        <img style={imgStyle} src="https://th.bing.com/th/id/OIP.k1U-SFSZlXTccE5WvQzDFQHaEo?w=316&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"alt="Dog 2" />
        <img style={imgStyle} src="https://th.bing.com/th/id/OIP.WPbIjTVzybLkt-gTPKC8SQHaEo?w=292&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="Dog 3" />
        <img style={imgStyle} src="https://th.bing.com/th/id/OIP.bYqhXkhD48BP19kA_QfN9gHaEo?w=302&h=188&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Dog 4" />
      </div>
    </div>
  );
}

export default Gallery;
