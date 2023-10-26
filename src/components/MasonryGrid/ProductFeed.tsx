import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import ProductCard from "@/components/ProductCard";

interface Image {
  src: string;
  width: number;
  height: number;
}

interface ImageGroup {
  images: Image[];
}

type ImageResult = Image | ImageGroup;

interface MasonryGridProps {
  items: ImageResult[];
}

const MasonryGrid: FC<MasonryGridProps> = ({ items }) => {
  return (
    <div className='masonry-grid' style={{ columnCount: 2, columnGap: "0.5rem" }}>
      {items.map((item, index) => (
        <div key={index} className='masonry-item mb-4 bg-gray-200 rounded-10 overflow-hidden'>
          <Link href='/1'>
            <ProductCard
              imageUrl={(item as Image).src}
              brand='Asos'
              width={(item as Image).width}
              height={(item as Image).height}
              description='lore ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
              currentPrice={70}
              originalPrice={120}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
