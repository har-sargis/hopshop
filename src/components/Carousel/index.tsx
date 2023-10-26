"use client";

import dynamic from "next/dynamic";
import React, { useState, useLayoutEffect } from "react";

interface IItem {
  width: number;
  height: number;
  src: string;
}

type CarouselProps = {
  images: IItem[];
};

export default function ParentComponent(props: CarouselProps) {
  const [supportsScrollSnap, setSupportsScrollSnap] = useState(false);

  useLayoutEffect(() => {
    setSupportsScrollSnap("scrollSnapType" in document.documentElement.style);
  }, []);

  const DynamicCarousel = dynamic(() => (supportsScrollSnap ? import("./ScrollSnap") : import("./Fallback")));

  return <DynamicCarousel images={props.images} />;
}