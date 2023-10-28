"use client";

import { useEffect, useState } from "react";

const gap = 10;
const totalPadding = 16 * 2;
export const useGetColumnWidth = () => {
  const [columnWidth, setColumnWidth] = useState<number>(getResponsiveWidth());
  const [windowWith, setWindowWidth] = useState<number>(window.innerWidth);

  function getResponsiveWidth(): number {
    // Calculate the available width after subtracting padding
    const availableWidth = window.innerWidth - totalPadding;

    // Calculate the maximum number of columns we can fit, accounting for the gap
    const maxColumns = Math.floor(availableWidth / 160);

    // Calculate the width of each column, dividing the available width by the number of columns and subtracting the gap
    return availableWidth / maxColumns;
  }

  useEffect(() => {
    const handleResize = () => {
      setColumnWidth(getResponsiveWidth());
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [columnWidth, windowWith];
};
