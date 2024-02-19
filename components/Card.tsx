import React, { memo, useState } from "react";
import "./Cards.css";

interface CardProps {
    title: string;
    color: string; 
    options: string[];
    onClick?: () => void;
    className?: string;
    isOpen?: boolean;
    cardColor?: string;
}

const Card: React.FC<CardProps> = memo(({ title, color, onClick, className, options, isOpen }) => {

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    }


  return (
    <button 
    className={`bg-${color} px-12 py-6 rounded-md text-center text-white shadow-md bg-opacity-75 cursor-pointer h-full flex items-center justify-center ${className}`}
    onClick={onClick}
    >
      {isOpen ? (
      <ul className="absolute top-0 left-0 right-0 z-10 bg-gray-200 shadow rounded-md mt-2">
        {options.map((option) => (
          <li key={option} 
          className={`px-4 py-2 text-base font-medium ${
            selectedOption === option ? "bg-gray-300 text-blue-500" : ""
          }`}
          onClick={() => handleOptionClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    ) : (
      <span className="transition-all duration-200">{title}</span>
    )}
    </button>
  );
});

export default Card;