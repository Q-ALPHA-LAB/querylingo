import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h3>Features</h3>
        <div className="feature-list">
          <div className="feature">
            <h4>Natural Language Query</h4>
            <p>Query your databases using simple English commands, no need to learn SQL or MongoDB syntax.</p>
          </div>
          <div className="feature">
            <h4>SQL & MongoDB Compatible</h4>
            <p>Converts English text into both SQL and MongoDB queries, making it versatile for any database engine.</p>
          </div>
          <div className="feature">
            <h4>Real-Time Data Insights</h4>
            <p>Instant query responses for faster insights and decision-making.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
