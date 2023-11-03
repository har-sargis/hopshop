"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FC } from "react";

import useInfiniteScroll from "@/hooks/useInfiniteScroll";

import Carousel from "@/components/Carousel";
import type { PostsResponse, cb } from "@/types";

const MasonryGrid: FC<{ items: PostsResponse; fetchNext: cb }> = ({ items, fetchNext }) => {
  const params = useParams();
  const loaderRef = useInfiniteScroll(fetchNext);
  return (
    <div className='masonry-grid' style={{ columnCount: 2, columnGap: "0.5rem" }}>
      {items.map((item, index) => (
        <div key={index} className='masonry-item mb-4 bg-gray-200 rounded-10 overflow-hidden relative'>
          {item.media_list.length ? (
            <Carousel images={item.media_list} />
          ) : (
            <Link
              href={{
                pathname: `${params.username}/${item.post_id}`,
                query: {
                  image_url: item.image_url,
                  width: item.width,
                  height: item.height,
                },
              }}
              className='relative'
            >
              <Image
                src={item.image_url}
                alt={`Masonry Item ${index}`}
                width={200}
                height={160}
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              />
            </Link>
          )}
        </div>
      ))}
      <div ref={loaderRef}></div>
    </div>
  );
};

export default MasonryGrid;
