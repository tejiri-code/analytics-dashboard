// components/Profile.jsx
import React from 'react';

const Profile = () => {
  // Add your profile information and design here
  return (
    <div className="p-2 border flex rounded-full shadow-md mb-1 text-black bg-white shadow-black">
        <div className="p-2 mr-2 border rounded-full shadow-md ">
     <i class="fa fa-user fa-lg" aria-hidden="true"></i>
     </div>
     <div className="text-center">
        <h3>John Doe Wood</h3>
        <p>andiicodes@xyz.com</p>
      </div>
      <div className="mt-2 pl-2">
      <i class="fa fa-angle-down fa-lg" aria-hidden="true"></i>
</div>
    </div>
  );
};

export default Profile;
