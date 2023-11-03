import { FC } from "react";

import Anchor from "@/components/Anchor";
import ProductCard from "@/components/ProductCard";
import type { SimilarProductData } from "@/types";

const MasonryGrid: FC<{ items: SimilarProductData[] }> = ({ items }) => {
  return (
    <div className='masonry-grid' style={{ columnCount: 2, columnGap: "0.5rem" }}>
      {items.map((item, index) => (
        <div key={index} className='masonry-item mb-4 overflow-hidden'>
          <Anchor href={item.product.url} target='_blank'>
            <ProductCard
              imageUrl={item.product.thumbnail}
              brand={item.product.retailer}
              description={item.product.name}
              currentPrice={item.product.price}
              originalPrice={item.product.old_price}
              currency={item.product.currency}
            />
          </Anchor>
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
