"use client";

import { useEffect, useState } from "react";

import type { Post } from "@/types";

const gap = 10;
const totalPadding = 16 * 2;
export const useGetColumnWidth = () => {
  const [columnWidth, setColumnWidth] = useState<number>(getResponsiveWidth());
  const [windowWith, setWindowWidth] = useState<number>(window.innerWidth - totalPadding);

  function getResponsiveWidth(): number {
    const windowWidth = window.innerWidth;
    // Calculate the available width after subtracting padding
    const availableWidth = windowWidth - totalPadding - gap;

    // Calculate the maximum number of columns we can fit, accounting for the gap
    const maxColumns = availableWidth < 700 ? 2 : 4;

    // Calculate the width of each column, dividing the available width by the number of columns and subtracting the gap
    return availableWidth / maxColumns;
  }

  useEffect(() => {
    const handleResize = () => {
      setColumnWidth(getResponsiveWidth());
      setWindowWidth(window.innerWidth - totalPadding);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return [columnWidth, windowWith];
};

interface PositionedItem extends Post {
  top: number;
  left: number;
  height: number;
}

function binarySearch(
  array: PositionedItem[],
  value: number,
  compareFn: (item: PositionedItem, value: number) => number
): number {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const comparison = compareFn(array[mid], value);

    if (comparison === 0) {
      return mid;
    } else if (comparison < 0) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return start;
}

export const useCalculatePositions = (
  items: Post[],
  columnWidth: number,
  gutterSize: number,
  containerWidth: number,
  scrollY: number
): [PositionedItem[], number] => {
  const [visibleItems, setVisibleItems] = useState<PositionedItem[]>([]);
  const [height, setHeight] = useState<number>(0);
  useEffect(() => {
    const numColumns = Math.floor(containerWidth / columnWidth);
    const columnHeights = new Array(numColumns).fill(0);
    const allPositions: PositionedItem[] = [];
    let shortestColumnIndex = 0;
    let shortestColumnHeight = 0;

    items.forEach((item) => {
      columnHeights.forEach((height, index) => {
        if (height < shortestColumnHeight) {
          shortestColumnIndex = index;
          shortestColumnHeight = height;
        }
      });
      const imageItem = item.pictures[0].size;

      const positionedItem: PositionedItem = {
        ...item,
        top: shortestColumnHeight,
        left: shortestColumnIndex * (columnWidth + gutterSize),
        height: Math.floor((imageItem.height / imageItem.width) * columnWidth),
      };

      allPositions.push(positionedItem);

      shortestColumnHeight += Math.floor((imageItem.height / imageItem.width) * columnWidth + gutterSize);
      columnHeights[shortestColumnIndex] = shortestColumnHeight;
    });

    const viewportBottom = scrollY + window.innerHeight;
    const compareStart = (item: PositionedItem, value: number) => item.top + item.height - value;
    const compareEnd = (item: PositionedItem, value: number) => item.top - value;
    const startIndex = binarySearch(allPositions, scrollY, compareStart);
    const endIndex = binarySearch(allPositions, viewportBottom, compareEnd) - 1;

    const visible = allPositions.slice(startIndex, endIndex + 1);
    setVisibleItems(visible);
    const maxColumnHeight = columnHeights.reduce((max, height): number => Math.max(max, height), 0);
    setHeight(maxColumnHeight);
  }, [items, columnWidth, gutterSize, containerWidth, scrollY]);

  return [visibleItems, height];
};