import Carousel from "@/components/Carusel";
import MasonryGrid from "@/components/MasonryGrid";

const images = Array.from({ length: 100 }, (_, index) => {
  const width = 500;
  const height = Math.floor(Math.random() * (500 - 300 + 1) + 300);
  return {
    src: `https://picsum.photos/seed/${index}/500/${height}`,
    width,
    height,
  };
});

const images2 = Array.from({ length: 10 }, (_, index) => {
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
      <p className='font-medium text-center text-lg pb-4'>Shop my look</p>
      <div className='p-4'>
        <Carousel images={images2.map(image => image.src)} />
      </div>
      <MasonryGrid items={images} />
    </>
  );
};

export default InfluencerStorefront;
