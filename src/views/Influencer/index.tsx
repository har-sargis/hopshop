"use client";

import { useCallback, useEffect } from "react";

import Virtualized from "@/components/Virtualized";
import { useGetInfluencerLooks, useGetInfluencerProfile } from "@/services/react-query/influencer";
import { Post } from "@/types";

const InfluencerStorefront = ({ param }: { param: string }) => {
  const { data: posts, fetchNextPage, hasNextPage } = useGetInfluencerLooks(param, 0);

  const getNextPosts = useCallback(() => {
    hasNextPage && fetchNextPage();
  }, [hasNextPage, fetchNextPage]);

  return (
    <>
      <p className='font-medium text-center text-lg pb-4'>Shop my look</p>
      {posts?.pages.length && (
        <Virtualized
          items={posts?.pages?.reduce((acc, curr) => acc.concat(curr.items), [] as Post[])}
          gutterSize={10}
          fetchNext={getNextPosts}
        />
      )}
    </>
  );
};

export default InfluencerStorefront;
