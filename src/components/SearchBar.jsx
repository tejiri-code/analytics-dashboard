// components/SearchBar.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useEffect } from 'react';

const SearchBar = () => {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  return (
    <div className="flex items-center space-x-4  ">
        <div className='border p-2 rounded-full '>
        <i className="fa fa-search" aria-hidden="true"></i>
      <input
        type="text"
        placeholder="Search..."
        className={`p-2 h-2 w-60  focus:outline-none focus:border-green-500 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}
    
      />
     </div>
    </div>
  );
};

export default SearchBar;
