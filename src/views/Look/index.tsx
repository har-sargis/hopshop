"use client";

import Image from "next/image";
import { useMemo, useState } from "react";



import type { ILook, SimilarProduct, Vertices, Point } from "@/types";

import styles from "./styles.module.css";
import BottomSheet from "@/components/BottomSheet";
import MasonryGrid from "@/components/MasonryGrid/ProductFeed";

function calculateCenter(rect: Vertices): Point {
  const centerX = (rect.bottomLeft.x + rect.topRight.x) / 2;
  const centerY = (rect.bottomLeft.y + rect.topLeft.y) / 2;
  return { x: centerX * 100, y: centerY * 100 };
}

const SimilarLooks = ({ image, data, width, height }: ILook) => {
  const vertices = useMemo(() => data.map((similarProduct: SimilarProduct) => similarProduct.vertices), [data]);
  const centers = useMemo(() => vertices.map((rect: Vertices) => calculateCenter(rect)), [vertices]);
  const [productIndex, setProductIndex] = useState(0);
  return (
    <>
      <div className='relative'>
        <Image
          src={image}
          width={Number(width) || 300}
          height={Number(height) || 500}
          alt='inlfuencer look'
          className='rounded-10'
          objectFit='cover'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px'
          layout='responsive'
        />
        {centers.map(({ x, y }, index) => (
          <div
            role='button'
            onClick={() => setProductIndex(index)}
            key={index}
            className={`rounded-full h-8 w-8 ${productIndex === index ? "bg-slate-200" : "bg-white"} absolute pointer ${
              productIndex === index ? "" : styles.blob
            }`}
            style={{ top: `${y}%`, left: `${x}%` }}
          />
        ))}
      </div>

      <BottomSheet>
        <MasonryGrid items={data[productIndex].result} />
      </BottomSheet>
    </>
  );
};

export default SimilarLooks;