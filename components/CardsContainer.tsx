import React, { memo, useState } from "react";
import Card from "./Card";
import positionOptions from "./position.json";
import locationOptions from "./location.json";
import companyOptions from "./company.json";

interface CardsContainerProps {
  searchTerm: string;
}

const CardsContainer: React.FC<CardsContainerProps> = ({ searchTerm }) => {

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (cardTitle: string) => {
    setSelectedCard(selectedCard === cardTitle ? null : cardTitle);
  };

  // Helper functions to filter options based on search term
  const filterPositions = (term: string) =>
    positionOptions.options.filter((option) =>
      option.toLowerCase().includes(term.toLowerCase())
    );

  const filterLocations = (term: string) =>
    locationOptions.options.filter((option) =>
      option.toLowerCase().includes(term.toLowerCase())
    );

  const filterCompanies = (term: string) =>
    companyOptions.options.filter((option) =>
      option.toLowerCase().includes(term.toLowerCase())
    );

  // Filter options based on search term
  const filteredPositions = filterPositions(searchTerm);
  const filteredLocations = filterLocations(searchTerm);
  const filteredCompanies = filterCompanies(searchTerm);


  const getCardOptions = (title: string) => {
    const cardOptions = {
      Position: positionOptions.options,
      Location: locationOptions.options,
      Company: companyOptions.options,
    }[title];

    return cardOptions || []; // Return an empty array if cardOptions is undefined
  };

  return (
    <div className="grid grid-cols-3 gap-4 text-center">
      
      {["Position", "Location", "Company"].map((title) => {
        const cardColor = title === "Position" 
        ? "orange-500" 
        : title === "Location" 
        ? "cyan-500" 
        : "blue-500";

        let filteredOptions: string[] = [];
        switch (title) {
          case "Position":
            filteredOptions = filteredPositions;
            break;
          case "Location":
            filteredOptions = filteredLocations;
            break;
          case "Company":
            filteredOptions = filteredCompanies;
            break;
          default:
            console.error(`Unexpected card title: ${title}`);
        }

        return (
      <Card
        key={title}
        title={title}
        color={cardColor}
        options={getCardOptions(title)}
        onClick={() => handleCardClick(title)}
        className={`hover:transform hover:scale-105 hover:shadow-lg transition-all duration-200 ${
          selectedCard === title ? "expanded" : ""
        }`}
        isOpen={selectedCard === title}
      />
      );
      })}
    </div>
  );
};

export default CardsContainer;
