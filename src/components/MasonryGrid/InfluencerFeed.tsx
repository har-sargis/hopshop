import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import Carousel from "@/components/Carousel";

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
          {(item as ImageGroup).images ? (
            <Carousel images={(item as ImageGroup).images} />
          ) : (
            <Link href='/1'>
              <Image
                src={(item as Image).src}
                alt={`Masonry Item ${index}`}
                width={(item as Image).width}
                height={(item as Image).height}
                className='border'
              />
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
