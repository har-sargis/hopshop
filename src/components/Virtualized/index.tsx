"use client";

import Image from "next/image";
import { useState, UIEvent } from "react";

import useInfiniteScroll from "@/hooks/useInfiniteScroll";

import type { Post, cb } from "@/types";
import debounce from "@/utils/debounce";

import Carousel from "../Carousel/ScrollSnap";
import { useCalculatePositions, useGetColumnWidth } from "./hooks";

interface Props {
  gutterSize: number;
  items: Post[];
  fetchNext: cb;
}

interface PositionedItem extends Post {
  top: number;
  left: number;
  height: number;
}

const VirtualizedMasonry: React.FC<Props> = ({ items, gutterSize, fetchNext }) => {
  const [columnWidth, containerWidth] = useGetColumnWidth();
  const loaderRef = useInfiniteScroll(fetchNext);
  const [scrollY, setScrollY] = useState(0);
  const [visibleItems, height] = useCalculatePositions(items, columnWidth, gutterSize, containerWidth, scrollY);

  const handleScroll = (e: UIEvent) => {
    if (e.currentTarget) {
      setScrollY(e.currentTarget.scrollTop);
    }
  };

  return (
    <div
      className='h-screen overflow-y-scroll'
      style={{
        width: `${containerWidth}px`,
      }}
      onScroll={handleScroll}
    >
      <div className='relative w-full' style={{ height }}>
        {visibleItems.map((item: PositionedItem) =>
          item.postType === "MULTIPLE" ? (
            <div
              key={item.pictures[0].imageUrl}
              className='absolute'
              style={{ width: columnWidth, top: `${item.top}px`, left: `${item.left}px` }}
            >
              <Carousel images={item.pictures} height={item.height} width={columnWidth}/>
            </div>
          ) : (
            <div
              className='absolute'
              key={item.pictures[0].imageUrl}
              style={{ width: columnWidth, top: `${item.top}px`, left: `${item.left}px` }}
            >
              <Image
                src={item.pictures[0].imageUrl}
                alt='Masonry Item'
                width={columnWidth}
                height={item.height}
                className='rounded-lg'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px'
              />
            </div>
          )
        )}
        <div
          ref={loaderRef}
          id='fetch-indicator'
          style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 50 }}
        />
      </div>
    </div>
  );
};

export default VirtualizedMasonry;
