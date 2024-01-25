import React from 'react';
import SearchBar from './SearchBar';
import Calendar from './Calendar';
import Profile from './Profile';
import NotificationBar from './NotificationBar';
import { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  return (
    <div className={`flex justify-between items-center bg-[#fafafa] p-2 text-black border-b border-gray-200 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
  
  
        <h1 className="text-2xl text-center ml-3 ">Dashboard</h1>
      <div className="flex items-center space-x-10">
        <SearchBar />
        <Calendar />
      <NotificationBar />
        <Profile />
      </div>
    </div>
  );
};

export default Header;
