import React from 'react';
import SearchBar from './SearchBar';
import Calendar from './Calendar';
import Profile from './Profile';
import NotificationBar from './NotificationBar';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white-800 p-4 text-black border-b border-gray-300">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <SearchBar />
        <Calendar />
      </div>
      <div className="flex items-center space-x-4">
      <NotificationBar />
        <Profile />
      </div>
    </div>
  );
};

export default Header;
