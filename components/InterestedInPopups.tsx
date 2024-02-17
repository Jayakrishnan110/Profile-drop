"use client"
import React, { useEffect, useState } from "react";

interface JobPosition {
  id: string;
  title: string;
  description: string;
}

interface Location {
  id: string;
  city: string;
  country: string;
}

interface Company {
  id: string;
  name: string;
  website: string;
}

interface DropdownState {
  data: JobPosition[] | Location[] | Company[]; // Data type based on active dropdown
    isOpen: boolean;
}

interface InterestedInPopupsProps {
}

const InterestedInPopups: React.FC<InterestedInPopupsProps> = ({ visible, handleButtonClick }) => {
  const [jobPositions, setJobPositions] = useState<JobPosition[]>([]);
  const [locations, setLocations] = useState<Location[]>([]);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [dropdownStates, setDropdownStates] = useState<DropdownState[]>([
    { data: [], isOpen: false }, // Job Positions
    { data: [], isOpen: false }, // Locations
    { data: [], isOpen: false }, // Companies
  ]);


  const fetchData = async () => {
    const [jobResponse, locationResponse, companyResponse] = await Promise.all([
      fetch('/path/to/job_positions.json'),
      fetch('/path/to/locations.json'),
      fetch('/path/to/companies.json'),
    ]);
    const [jobData, locationData, companyData] = await Promise.all([
      jobResponse.json(),
      locationResponse.json(),
      companyResponse.json(),
    ]);
    setJobPositions(jobData);
    setLocations(locationData);
    setCompanies(companyData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const toggleDropdown = (index: number) => {
    setDropdownStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? { ...state, isOpen: !state.isOpen } : state))
    );
  };

  const renderDropdown = (index: number, data: JobPosition[] | Location[] | Company[]) => {
    const dropdownTitle = index === 0 ? 'Job Positions' : index === 1 ? 'Locations' : 'Companies';

    return (
      <div className="dropdown">
        <button onClick={() => toggleDropdown(index)}
        className="block w-full border-2 border-gray-300 py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
        >
        {dropdownTitle}
        </button>
        {dropdownStates[index].isOpen && (
          <ul className="absolute bg-white z-50 w-full rounded-md shadow-md overflow-hidden border border-gray-300">
            {data.map((item) => (
              <li key={item.id} className={`card ${index === 0 ? 'blue' : index === 1 ? 'red' : 'green'}`}>
                {index === 0 && ( // Job Positions
                  <span className="font-bold">{item.title}</span>
                )}
                {index === 1 && ( // Locations
                  <>
                  <span className="font-bold">{item.city}</span>, {item.country}
                </>
                )}
                {index === 2 && ( // Companies
                  <span className="font-bold">{item.name}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  return (
    <div className="popup-container">
      <button onClick={handleButtonClick}>Interested in</button>
      {visible && (
        <div className="popup-content">
          {renderDropdown(0, jobPositions)}
          {renderDropdown(1, locations)}
          {renderDropdown(2, companies)}
        </div>
      )}
      {dropdownStates.map((state, index) => renderDropdown(index, state.data))}
    </div>
  );
};

export default InterestedInPopups;