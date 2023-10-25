import React from "react";

import clsx from "clsx";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant, children, onClick }) => {
  const buttonClass = clsx("text-white px-6 py-2 rounded-lg font-montserrat", {
    "bg-primary-500 hover:bg-primary-600": variant === "primary",
    "bg-secondary-500 hover:bg-secondary-600": variant === "secondary",
  });

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
