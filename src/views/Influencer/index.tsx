import MasonryGrid from "@/components/MasonryGrid";
import Virtualized from "@/components/Virtualized";

const images = Array.from({ length: 100 }, (_, index) => {
  const width = 500;
  const height = Math.floor(Math.random() * (500 - 300 + 1) + 300);
  return index % 4 === 0
    ? {
        images: [
          {
            width,
            height,
            src: `https://picsum.photos/seed/${index}/500/${height}`,
          },
          {
            width,
            height,
            src: `https://picsum.photos/seed/${index}/500/${height}`,
          },
          {
            width,
            height,
            src: `https://picsum.photos/seed/${index}/500/${height}`,
          },
          {
            width,
            height,
            src: `https://picsum.photos/seed/${index}/500/${height}`,
          },
        ],
      }
    : {
        src: `https://picsum.photos/seed/${index}/500/${height}`,
        width,
        height,
      };
});

const InfluencerStorefront = () => {
  return (
    <>
      <p className='font-medium text-center text-lg pb-4'>Shop my look</p>
      {/* <MasonryGrid items={images} /> */}
      <Virtualized />
    </>
  );
};

export default InfluencerStorefront;
