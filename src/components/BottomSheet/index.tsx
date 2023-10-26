"use client";

import React, { useState, useRef } from "react";

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children }) => {
  const bottomSheetRef = useRef<HTMLDivElement | null>(null);
  const [translateY, setTranslateY] = useState(80); // Start at the "closed" state
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !startY) return;
    const deltaY = e.clientY - startY;
    const newTranslation = Math.min(Math.max(translateY + (deltaY * 100) / window.innerHeight, 0), 80);
    setTranslateY(newTranslation);
    setStartY(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setStartY(null);
  };

  return (
    <div
      ref={bottomSheetRef}
      className='fixed bottom-0 left-0 w-full bg-white rounded-t-lg shadow-lg transition-transform duration-300 ease-out'
      style={{ transform: `translateY(${translateY}%)` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className='flex justify-center py-4'>
        <div className='w-16 h-1 bg-gray-400 rounded-full'></div>
      </div>
      <div className='font-medium text-base text-center mb-4'>Visual Matches</div>
      <div className='overflow-y-auto p-4' style={{ maxHeight: "70vh" }}>
        {children}
      </div>
    </div>
  );
};

export default BottomSheet;
