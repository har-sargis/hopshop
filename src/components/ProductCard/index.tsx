import Image from "next/image";
import React from "react";


interface ProductCardProps {
  imageUrl: string;
  brand: string;
  description: string;
  currentPrice: number;
  originalPrice?: number;
  currency: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  brand,
  description,
  currentPrice,
  currency,
  originalPrice,
}) => {
  return (
    <div className='relative'>
      <Image
        src={imageUrl}
        alt={brand}
        width={160}
        height={100}
        className='rounded-lg'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px'
        objectFit='cover'
        layout='responsive'
      />
      <div>
        <h3 className='text-sm font-medium mt-2'>{brand}</h3>
        <p
          className='text-gray-600 text-sm font-thin text-ellipsis overflow-hidden whitespace-nowrap'
          title={description}
        >
          {description}
        </p>
        <div className='mt-2 flex items-center gap-x-1'>
          <span className='text-sm font-medium text-red-500'>
            {currentPrice} {currency}
          </span>
          {originalPrice && (
            <span className='text-sm font-medium text-gray-400 line-through'>
              {originalPrice} {currency}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;