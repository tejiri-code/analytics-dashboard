import React from 'react';

const ThemeToggle = () => {
  return (
    <label htmlFor="theme" className="flex items-center tap-highlight-transparent theme">
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle appearance-none"
          type="checkbox"
          role="switch"
          name="theme"
          value="dark"
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          {[...Array(9)].map((_, index) => (
            <span
              key={index}
              className={`theme__icon-part ${index > 0 ? 'bg-white rounded opacity-0' : ''}`}
              style={{
                boxShadow: '0.4em -0.4em 0 0.5em hsl(0,0%,100%) inset',
                transform: `rotate(${index * 45}deg) translateY(0.45em)`,
              }}
            ></span>
          ))}
        </span>
      </span>
    </label>
  );
};

export default ThemeToggle;
