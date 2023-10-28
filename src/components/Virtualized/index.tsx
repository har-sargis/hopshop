"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { useGetColumnWidth } from "./hooks";

interface Item {
  width: number;
  height: number;
  src: string;
  actualHeight?: number;
}

interface Props {
  items: Item[];
  gutterSize: number;
}

interface PositionedItem {
  top: number;
  left: number;
  width: number;
  height: number;
  src: string;
}

const VirtualizedMasonry: React.FC<Props> = ({ items, gutterSize }) => {
  const [columnWidth, containerWidth] = useGetColumnWidth();
  const [visibleItems, setVisibleItems] = useState<PositionedItem[]>([]);
  const [scrollY, setScrollY] = useState(0);

  const recalculatePositions = (e, index) => {
    console.log(e.target.height);
    console.log(e.currentTarget.height);
  };
  useEffect(() => {
    const numColumns = Math.floor(containerWidth / columnWidth);
    const columnHeights = new Array(numColumns).fill(0);
    const allPositions: PositionedItem[] = [];

    items.forEach((item, index) => {
      const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));

      const positionedItem: PositionedItem = {
        ...item,
        top: columnHeights[shortestColumnIndex],
        left: shortestColumnIndex * (columnWidth + gutterSize),
        height: items[index].height,
      };

      allPositions.push(positionedItem);

      columnHeights[shortestColumnIndex] += items[index].height + gutterSize;
    });

    const viewportHeight = window.innerHeight;
    const visible = allPositions.filter(
      (item) => item.top + item.height > scrollY - 1000 && item.top < scrollY + viewportHeight + 1000
    );

    setVisibleItems(visible);
  }, [items, columnWidth, gutterSize, containerWidth, scrollY]);

  return (
    <div
      style={{
        position: "relative",
        width: `${containerWidth}px`,
        overflowY: "auto",
        height: "100vh",
      }}
      onScroll={(e) => setScrollY(e.currentTarget.scrollTop)}
    >
      {visibleItems.map((item, index) => (
        <Image
          key={item.src}
          src={item.src}
          alt='Masonry Item'
          width={columnWidth}
          height={item.height}
          className='rounded-lg'
          onLoad={(e) => recalculatePositions(e, item.src)}
          style={{
            position: "absolute",
            top: `${item.top}px`,
            left: `${item.left}px`,
          }}
        />
      ))}
    </div>
  );
};

const images = Array.from({ length: 1000 }, (_, index) => {
  const width = 300;
  const height = Math.floor(Math.random() * (300 - 200 + 1) + 200);
  return {
    src: `https://picsum.photos/seed/${index}/500/${height}`,
    width,
    height,
    actualHeight: undefined,
  };
});

const App: React.FC = () => {
  return <VirtualizedMasonry items={images} gutterSize={10} />;
};

export default App;
