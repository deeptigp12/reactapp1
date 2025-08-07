function Home() {
  const bannerStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    background: 'linear-gradient(90deg, #ffd194, #ffb347)',
    color: '#5a381e',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
    animation: 'fadeIn 2s ease-in-out',
    borderRadius: '12px',
    margin: '20px auto',
    width: '90%',
    maxWidth: '800px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  };

  const quoteStyle = {
    textAlign: 'center',
    marginTop: '20px',
    fontStyle: 'italic',
    color: '#555',
    fontSize: '1.2rem',
    padding: '0 10px',
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '30px',
    padding: '0 10px',
  };

  const linkStyle = {
    color: '#5a381e',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    border: '1px solid #5a381e',
    padding: '8px 16px',
    borderRadius: '8px',
    transition: 'all 0.3s ease-in-out',
    backgroundColor: '#fff',
  };

  return (
    <div>
      {/* Inline CSS for animation + responsive media query */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          a:hover {
            background-color: #5a381e;
            color: white !important;
          }

          @media (max-width: 600px) {
            div {
              font-size: 90%;
            }

            nav a {
              font-size: 0.9rem !important;
              padding: 6px 12px !important;
            }

            h1 {
              font-size: 1.5rem !important;
            }
          }
        `}
      </style>

      <div style={bannerStyle}>
        🐾 Welcome to Paws & Tails 🐶
      </div>

      <p style={quoteStyle}>
        "Dogs leave paw prints on our hearts." 💛
      </p>

      <nav style={navStyle}>
        <a href="/dashboard" style={linkStyle}>Dashboard</a>
        <a href="/login" style={linkStyle}>Login</a>
        <a href="/signup" style={linkStyle}>Signup</a>
        <a href="/gallery" style={linkStyle}>Gallery</a>
        <a href="/contactus" style={linkStyle}>Contact Us</a>
      </nav>
    </div>
  );
}

export default Home;
