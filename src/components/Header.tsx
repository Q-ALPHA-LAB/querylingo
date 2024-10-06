import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>AI-DB Landing</h1>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
