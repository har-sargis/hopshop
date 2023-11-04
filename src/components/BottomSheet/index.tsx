"use client";

import React, { useState, useRef, TouchEvent } from "react";

interface BottomSheetProps {
  children: React.ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ children }) => {
  const [transform, setTransform] = useState(window ? window.innerHeight - 120 : 0);
  const startY = useRef<number | null>(null);
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    startY.current = touch.clientY;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!startY.current) return;

    const touch = e.touches[0];

    setTransform(touch.clientY);
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    if (!startY.current) return;
    const touch = e.changedTouches[0];
    const deltaY = startY.current - touch.clientY;
    const isSwipeUp = touch.clientY < startY.current;
    if (!isSwipeUp) {
      Math.abs(deltaY) > 200 ? setTransform(window.innerHeight - 60) : setTransform(10);
    } else if (isSwipeUp) {
      Math.abs(deltaY) > 200 ? setTransform(10) : setTransform(window.innerHeight - 60);
    }
  };

  return (
    <div
      className='h-screen fixed bottom-0 left-0 w-full bg-gray-4 rounded-11 transition-transform duration-300 ease-out shadow-custom'
      style={{ transform: `translateY(${transform}px)` }}
    >
      <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div className='flex justify-center py-4'>
          <div className='w-16 h-1 bg-gray-400 rounded-full'></div>
        </div>
        <div className='font-medium text-base text-center mb-4'>Visual Matches</div>
      </div>
      <div className='overflow-y-auto p-4 h-v8'>{children}</div>
    </div>
  );
};

export default BottomSheet;