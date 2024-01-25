import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { useTheme } from './context/ThemeContext';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

function App() {
  const { darkMode } = useTheme();
  return (
    <ThemeProvider>
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <MainContent />
      </div>
    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;
