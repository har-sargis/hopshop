import Image from "next/image";

import BottomSheet from "@/components/BottomSheet";
import MasonryGrid from "@/components/MasonryGrid/ProductFeed";

const images = Array.from({ length: 100 }, (_, index) => {
  const width = 500;
  const height = Math.floor(Math.random() * (500 - 300 + 1) + 300);
  return {
    src: `https://picsum.photos/seed/${index}/500/${height}`,
    width,
    height,
  };
});

const InfluencerStorefront = () => {
  return (
    <>
      <Image
        src='https://picsum.photos/seed/1}/500/500'
        width={300}
        height={500}
        alt='look image'
        className='rounded-10'
        objectFit='cover'
        layout='responsive'
      />

      <BottomSheet>
        <MasonryGrid items={images} />
      </BottomSheet>
    </>
  );
};

export default InfluencerStorefront;
