import Image from "next/image";
import React from "react";

interface ProductCardProps {
  imageUrl: string;
  brand: string;
  description: string;
  currentPrice: number;
  originalPrice: number;
  width: number;
  height: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  brand,
  width,
  height,
  description,
  currentPrice,
  originalPrice,
}) => {
  return (
    <div className='rounded-lg shadow-lg bg-white relative'>
      <Image
        src={imageUrl}
        alt={brand}
        className='rounded-lg'
        objectFit='cover'
        width={width}
        height={height}
        layout='responsive'
      />
      <h3 className='text-xs font-medium mt-2'>{brand}</h3>
      <p className='text-gray-600 text-xs font-thin text-ellipsis overflow-hidden whitespace-nowrap'>{description}</p>
      <div className='mt-2 flex items-center gap-y-1'>
        <span className='text-sm font-medium text-red-500'>${currentPrice}</span>
        <span className='text-sm font-medium text-gray-400 line-through'>${originalPrice}</span>
      </div>
    </div>
  );
};

export default ProductCard;
