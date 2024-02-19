"use client";
import React, { useState } from "react";
import CardsContainer from "./CardsContainer";
import SearchBar from "./SearchBar";


interface ProfileProps {
  name: string;
  job: string;
  profileImage: string;
  bannerImage: string;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  job,
  profileImage,
  bannerImage,
}) => {
  const [ showPopup, setShowPopup ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState("");

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleSearchChange = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="container mx-auto flex flex-col items-center">
      <img
        src={bannerImage}
        alt="Banner image"
        className="w-full h-48 object-cover"
      />

      <div className="flex flex-row items-center mt-8">
        <img
          src={profileImage}
          alt={name}
          className="w-32 h-32 rounded-full border-4 border-white mx-auto"
        />

        <div className="text-center mt-4">
          <h2 className="text-3xl font-bold">{name}</h2>
          <p className="text-gray-500">{job}</p>
        </div>
      </div>

      <div className="text-center mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={handleButtonClick}
        >
          Interested in
        </button>
      </div>

      {showPopup && (
        <div className="absolute bottom-0 left-0 right-0 z-10 mt-12 mx-auto p-4 rounded-md bg-gray-300/70 backdrop-filter-blue-lg flex flex-col items-center justify-center h-auto w-80 sm:w-96 md:w-112">
          {/* <div className="bg-gray-300/70 backdrop-filter-blue-lg p-4 rounded-md mx-auto w-72 h-48"> */}
            <SearchBar onSearch={handleSearchChange} />
            <CardsContainer searchTerm={searchTerm}/>
            <button 
            className="bg-cyan-500 text-white px-4 py-2 rounded-md mt-4"
            onClick={handlePopupClose}
            >
              Close
            </button>
          {/* </div> */}
        </div>
      )}
    </div>
  );
};

export default Profile;
