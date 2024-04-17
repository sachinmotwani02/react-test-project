import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">BrainyLingo</a>
      </div>
      <div className="navbar-links">
        <a href="/">Home</a>
        <a href="/">Leaderboard</a>
        <a href="/">Stories</a>
      </div>
      <div className="navbar-signup">
        <button>Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;
