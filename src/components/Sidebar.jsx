// LinkShortner.js
import React, { useState, useEffect } from 'react';
import './dex.css'
import { useTheme } from '../context/ThemeContext';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import '../index.css'

export default function LinkShortner() {
  const [isActive, setIsActive] = useState(false);
  const { darkMode, toggleTheme } = useTheme();

  const toggleSection = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  const navigationLinks = [
    {
      href: 'example.com',
      iconClass: 'fa-regular fa-building',
      text: 'Home',
      isActive: true,
    },
    {
      href: 'example.com',
      iconClass: 'fa-regular fa-user',
      text: 'People',
      count: 10,
    },
    {
      href: 'example.com',
      iconClass: 'fa-regular fa-hard-drive',
      text: 'Dashboard',
    },
    {
      href: 'example.com',
      iconClass: 'fa-regular fa-lightbulb',
      text: 'Performance',
      count: 20
    },
    {
      href: 'example.com',
      iconClass: 'fa-regular fa-paper-plane',
      text: 'Development',
    },
    {
      href: 'example.com',
      iconClass: 'fa-regular fa-chart-bar',
      text: 'Reports',
    },
    {
      href: 'example.com',
      iconClass: 'fa-regular fa-circle-user',
      text: 'Admin',
    },
    {
      href: 'example.com',
      iconClass: 'fa-regular fa-life-ring',
      text: 'Settings',
    },
  ];
  console.log('Dark Mode:', darkMode);
  return (
    <div>
    <div className='border-r  border-gray-200'>
  <section className={!isActive ? 'active' : ''} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
  <div className="button" onClick={toggleSection} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
    <i className="fa-solid fa-bars" />
  </div>
  <div className="sidebar" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
    <ul style={{ color: darkMode ? '#ffffff' : '#000000' }} >
      {navigationLinks.map((link, index) => (
        <li key={index} style={{ color: darkMode ? '#ffffff' : '#000000' }}>
          <a href={link.href} className={link.isActive ? 'active' : ''}>
            <span className="icon">
              <i className={link.iconClass} style={{ color: darkMode ? '#ffffff' : '#000000' }}/>
            </span>
            <span className="item" style={{ color: darkMode ? '#ffffff' : '#000000' }}>
                      {link.text}
                    </span>
            {link.count && <span className="count">{link.count}</span>}
            
          </a>
          
        </li>
      ))}
    </ul>
    </div>
</section>
</div>
<button >
        <BsFillMoonStarsFill onClick={toggleTheme} className='cursor-pointer text-xl ml-10' />
      </button>
</div>
  )
}