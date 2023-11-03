import { GET_POSTS_API, GET_PROFILE_API } from "@/configs/constats";

import { InfluencerProfile, Data } from "@/types";
import { useQuery, useMutation, useQueryClient, useInfiniteQuery } from "@tanstack/react-query";

const fetchPosts = async (username: string, offset: number): Promise<Data> => {
  const response = await fetch(GET_POSTS_API(username, offset));
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return { ...data, offset, done: data.next === 0 };
};

export const useGetInfluencerLooks = (username: string, offset: number) => {
  return useInfiniteQuery<Data, Error>({
    queryKey: ["posts", username, offset],
    queryFn: ({ pageParam }) => fetchPosts(username, pageParam as number),
    getNextPageParam: (lastPage) => {
      if (lastPage.done) return undefined;
      return lastPage.offset + lastPage.items.length;
    },
    initialPageParam: offset,
  });
};

const fetchProfile = async (username: string): Promise<InfluencerProfile> => {
  const response = await fetch(GET_PROFILE_API(username));
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
export const useGetInfluencerProfile = (username: string) =>
  useQuery<InfluencerProfile, Error>({
    queryKey: ["profile", username],
    queryFn: () => fetchProfile(username),
    retry: false,
  });
