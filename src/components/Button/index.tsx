import React from "react";

import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, onClick, size }) => {
  const buttonClass = clsx(
    `text-white px-6  ${size === "lg" ? "py-5" : size === "md" ? "py-4" : "py-3"} rounded-lg w-full`,
    {
      "bg-brand-blue-dark hover:bg-brand-blue-dark-600": variant === "primary",
      "bg-brand-blue-light hover:bg-brand-blue-light-600": variant === "secondary",
    }
  );

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
