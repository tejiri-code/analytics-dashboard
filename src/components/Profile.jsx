// components/Profile.jsx
import React from 'react';
import image from './img.jpg'
import { useTheme } from '../context/ThemeContext';
import { useEffect } from 'react';

const Profile = () => {
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);
  return (
    <div className={`p-2 border h-11 flex rounded-full justify-center items-center mb-2 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
   <div className='py-3 flex items-center'>
        <div className=" pr-2 my-3">
        <img src={image} alt="profile" className="rounded-full h-9 w-9 " />
     </div>
     <div className="text-center ">
        <h4>John Doe Wood</h4>
        <p>andiicodes@xyz.com</p>
      </div>
      <div className="mt-1 pl-2">
      <i className="fa fa-angle-down fa-lg" aria-hidden="true"></i>
</div>
    </div>
    </div>
  );
};

export default Profile;
