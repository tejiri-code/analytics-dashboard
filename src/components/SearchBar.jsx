// components/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex items-center space-x-4 mb-4">
        <div className='border p-2 rounded-full '>
        <i class="fa fa-search" aria-hidden="true"></i>
      <input
        type="text"
        placeholder="Search..."
        className=" p-2  focus:outline-none focus:border-blue-500"
      />
     </div>
    </div>
  );
};

export default SearchBar;
