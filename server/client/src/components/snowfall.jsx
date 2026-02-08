import React, { useMemo } from 'react';
import Snowflakes from "../assets/snowflakes2.webp"

const Snowfall = ({ snowflakeCount = 80 }) => {
  // Generate random snowflakes with different properties
  const snowflakes = useMemo(() => {
    return Array.from({ length: snowflakeCount }, (_, i) => ({
      id: i,
      left: Math.random() * 100, // Random horizontal position (0-100%)
      animationDuration: 5 + Math.random() * 10, // Random fall speed (5-15s)
      animationDelay: Math.random() * 5, // Random start delay (0-5s)
      opacity: 0.3 + Math.random() * 0.7, // Random opacity (0.3-1)
      size: 10 + Math.random() * 10, // Random size (2-6px)
      swingOffset: -20 + Math.random() * 40, // Random horizontal swing
    }));
  }, [snowflakeCount]);

  return (
    <div className="absolute inset-0 h-full overflow-hidden pointer-events-none z-10">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration}s`,
            animationDelay: `${flake.animationDelay}s`,
            opacity: flake.opacity,
            '--swing-offset': `${flake.swingOffset}px`,
          }}
        >
          <div
            className="snowflake-inner"
            style={{
              width: `${flake.size}px`,
              height: `${flake.size}px`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default Snowfall;
