"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useRef } from "react";

import clsx from "clsx";

import type { Carousel } from "@/types";
import album from "@assets/assets/svg/album.svg";

const Carousel: React.FC<Carousel> = ({ images, width, height }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const params = useParams();
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
        className='top-0 left-0 flex w-full h-full overflow-x-auto snap-x scroll-smooth snap-mandatory snap-always relative'
        style={{
          scrollbarWidth: "none",
        }}
      >
        {images.map(({ imageUrl, postId, size }, idx) => (
          <Link
            href={{
              pathname: `${params.username}/${postId}`,
              query: {
                image_url: imageUrl,
                width: size.width,
                height: size.height,
              },
            }}
            key={idx}
            className='relative w-full h-full flex-shrink-0 snap-center snap-always'
          >
            <Image
              src={imageUrl}
              alt={`Slide ${idx}`}
              width={width}
              height={height}
              priority={idx === activeIndex || idx === activeIndex + 1}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px'
            />
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
