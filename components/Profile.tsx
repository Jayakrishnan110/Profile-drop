import React from 'react';
import Image from 'next/image';
import InterestedInPopups from './InterestedInPopups';

interface ProfileProps {
  name: string;
  job: string;
  profileImage: string;
}

const Profile: React.FC<ProfileProps> = ({ name, job, profileImage, visible, handleButtonClick }) => {
  return (
    <div className="container mx-auto p-4">
      <img src={profileImage} alt={name} className="w-64 h-64 rounded-full mx-auto" />
      <h2 className="text-3xl font-bold mt-4">{name}</h2>
      <p className="text-gray-500">{job}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={handleButtonClick}>
        Interested in
      </button>
    </div>
  );
};

export default Profile;