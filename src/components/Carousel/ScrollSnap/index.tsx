"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

import clsx from "clsx";

import album from "@assets/assets/svg/album.svg";

interface IItem {
  width: number;
  height: number;
  src: string;
}

type CarouselProps = {
  images: IItem[];
};

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (carouselRef.current) {
      const container = carouselRef.current;
      const currentIndex = Math.round(container.scrollLeft / container.clientWidth);
      setActiveIndex(currentIndex);
    }
  };

  return (
    <div className='relative overflow-hidden rounded-10'>
      <Image src={album} alt='album icon' className='absolute top-3 right-3 z-10' />
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className='top-0 left-0 flex w-full h-full overflow-x-auto snap-x scroll-smooth snap-mandatory snap-always'
        style={{
          scrollbarWidth: "none",
        }}
      >
        {images.map(({ height, width, src }, idx) => (
          <Link href='/1' key={idx} className='relative w-full h-full flex-shrink-0 snap-center snap-always'>
            <Image src={src} alt={`Slide ${idx}`} objectFit='cover' width={width} height={height} layout='responsive' />
          </Link>
        ))}
      </div>
      <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2 flex'>
        {images.map((_, idx) => (
          <span
            key={idx}
            className={clsx("block h-2 w-2 rounded-full", activeIndex === idx ? "bg-white" : "bg-white bg-opacity-40")}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
