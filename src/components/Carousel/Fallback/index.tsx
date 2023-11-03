"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";

import clsx from "clsx";

import { Carousel } from "@/types";
import album from "@assets/assets/svg/album.svg";
const Carousel: React.FC<Carousel> = ({ images, width, height }) => {
  const params = useParams();

  const [activeIndex, setActiveIndex] = useState(0);
  const [isTouch, setIsTouch] = useState(false);
  const [startX, setStartX] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleTouchStart = (event: any) => {
    setIsTouch(true);
    setStartX(event.touches[0].pageX);
  };

  const handleTouchEnd = (event: any) => {
    if (startX - event.changedTouches[0].pageX > 50) {
      nextSlide();
    } else if (event.changedTouches[0].pageX - startX > 50) {
      prevSlide();
    }
    setIsTouch(false);
  };

  useEffect(() => {
    const preventDefaultTouch = (e: TouchEvent) => {
      if (isTouch) e.preventDefault();
    };
    window.addEventListener("touchmove", preventDefaultTouch, { passive: false });
    return () => {
      window.removeEventListener("touchmove", preventDefaultTouch);
    };
  }, [isTouch]);

  return (
    <div
      className='relative w-full h-full overflow-hidden rounded-10'
      style={{ height: "auto" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Image src={album} alt='album icon' className='absolute top-3 right-3 z-10' />
      <div
        className='absolute top-0 left-0 flex w-full h-full transition-transform duration-300 ease-in-out'
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
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
            className='relative w-full h-full flex-shrink-0'
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