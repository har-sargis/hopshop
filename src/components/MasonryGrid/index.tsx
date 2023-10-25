import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface MasonryGridProps {
  items: { width: number; height: number; src: string }[];
}

const MasonryGrid: FC<MasonryGridProps> = ({ items }) => {
  return (
    <div className='masonry-grid' style={{ columnCount: 2, columnGap: "0.5rem" }}>
      {items.map((item, index) => (
        <div key={index} className='masonry-item mb-4 bg-gray-200 rounded-10 overflow-hidden'>
          <Link href='/1'>
            <Image
              src={item.src}
              alt={`Masonry Item ${index}`}
              width={item.width}
              height={item.height}
              className='border'
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
