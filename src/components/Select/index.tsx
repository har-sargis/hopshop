"use client";

import React, { useState } from "react";

import Icon from "../Icon";

interface DropdownSelectProps {
  options: string[];
  placeholder: string;
  onChange?: (value: string) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = ({ options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className='relative w-full'>
      <div
        onClick={toggleDropdown}
        className='block w-full p-2 border-0 border-b-2 cursor-pointer focus:outline-none font-normal text-sm text-gray-500'
      >
        {selectedOption || placeholder}
        <span className='float-right'>
          <Icon name={isOpen ? "chevron-up" : "chevron-down"} />
        </span>
      </div>

      <div className={`overflow-hidden transition-max-height duration-500 ${isOpen ? "max-h-[500px]" : "max-h-0"}`}>
        {options.map((option) => (
          <div
            key={option}
            onClick={() => handleOptionClick(option)}
            className='p-2 hover:bg-blue-100 cursor-pointer text-sm text-gray-500'
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownSelect;
