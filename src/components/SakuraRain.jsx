import React from 'react';
import './SakuraRain.css';

function SakuraRain() {
  const petals = Array.from({ length: 20 });
  return (
    <div className="sakura-container">
      {petals.map((_, i) => (
        <div key={i} className="sakura" style={{
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 5}s`
        }}>
          🌸
        </div>
      ))}
    </div>
  );
}

export default SakuraRain;
