import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useTheme } from './context/ThemeContext';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import { useState, useEffect } from 'react';


function App() {
  const { darkMode, toggleTheme } = useTheme();
  useEffect(() => {
    // Add or remove 'dark-mode' class based on darkMode state
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  return (
    <ThemeProvider>
         <div className={` overscroll-x-contain  w-screen max-h-screen ${darkMode ? '' : ''}`}>
    <div className="flex h-screen">
      <div>
      <Sidebar />
      </div>
      <div className="flex flex-col flex-1 ">
        <Header />
        <MainContent />
      </div>
    </div>
    </div>
     </ThemeProvider>
  );
}

export default App;
