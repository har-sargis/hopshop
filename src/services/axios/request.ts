import { PROFILE_API, SIMILAR_API, FEATURED_API } from "@/configs/constats";

import { InfluencerProfile, SimilarData } from "@/types";

import apiService from "./apiService";

export const getInfluencerProfileData = async (username: string): Promise<InfluencerProfile> => {
  return apiService.get(PROFILE_API, { username });
};

export const getInfluencerPost = async (
  username: string,
  post_id: string,
  order: string
): Promise<InfluencerProfile> => {
  return apiService.get(PROFILE_API, { username, post_id, order });
};

interface ISimiliarLooksRequestBody {
  gender: string | null;
  image_url: string | null;
  post_id: string | null;
  username: string | null;
}

export const getSimilarLooks = async ({
  image_url,
  post_id,
  username,
}: ISimiliarLooksRequestBody): Promise<SimilarData | []> => {
  if (!image_url || !post_id || !username) return [];
  return apiService.get(SIMILAR_API, { imageUrl: image_url, postId: post_id, username });
};

export const getFeaturedInfluencers = async () => {
  return apiService.get(FEATURED_API);
};
