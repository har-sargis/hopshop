import React from "react";

interface AnchorTagProps {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  className?: string;
  children: React.ReactNode;
}

const AnchorTag: React.FC<AnchorTagProps> = ({ href, target = "_self", className, children }) => {
  return (
    <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : ""} className={className}>
      {children}
    </a>
  );
};

export default AnchorTag;
