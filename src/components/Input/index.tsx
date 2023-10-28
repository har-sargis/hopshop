"use client";

import React, { forwardRef, useState, ForwardRefRenderFunction } from "react";

interface FloatingLabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  type?: string;
  error?: string;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, FloatingLabelInputProps> = (
  { placeholder, name, type = "text", error },
  ref
) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value === "") setIsFocused(false);
  };

  return (
    <div className='relative'>
      <input
        ref={ref}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className={`block w-full p-2 border-0 border-b-2 focus:outline-none text-gray-500 text-sm${
          error ? "border-red-500" : "border-gray-500"
        }`}
      />
      <label
        htmlFor={name}
        className={`absolute left-2 top-1/2 text-gray-500 text-sm font-normal transition-all duration-300 z-10 ${
          isFocused ? "transform -translate-y-full/2" : "-translate-y-1/2"
        }`}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default forwardRef(Input);
