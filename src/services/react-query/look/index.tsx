import { SIMILAR_API } from "@/configs/constats";

import apiService from "@/services/axios/apiService";
import { SimilarData, ISimilarSearch } from "@/types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const API = `${process.env.NEXT_PUBLIC_WEB_API}/pyapi/v2/products/similar`;

const fetchProfile = async (params: ISimilarSearch) => {
  const response = await apiService.post(SIMILAR_API, params);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const useGetSimilarLooks = (params: ISimilarSearch) => {
  return useQuery<SimilarData, Error>({
    queryKey: ["posts", params],
    queryFn: () => fetchProfile(params),
    retry: false,
  });
};
