import { AxiosError, AxiosResponse } from "axios";
import { LRUCache } from "lru-cache";

import axios from "./";

// Define the structure of the response object
interface InfluencerProfile {
  influencer_username: string;
  posts_count: number;
  profile_pic_url: string;
}

interface ApiResponse {
  obj: InfluencerProfile;
  success: boolean;
}

interface Params {
  [key: string]: any;
}

// Create an LRU cache instance
const cache = new LRUCache<string, any>({
  max: 500,
});

const generateCacheKey = (url: string, params?: Params): string => {
  const paramsString = params ? JSON.stringify(params) : "";
  return `${url}-${paramsString}`;
};

const isAxiosError = (error: unknown): error is AxiosError => {
  return (error as AxiosError).isAxiosError === true;
};

const handleErrors = (error: unknown): void => {
  if (isAxiosError(error)) {
    console.error("API Error:", error);
    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Request data:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
  } else {
    console.error("An unknown error occurred:", error);
  }
};

const apiService = {
  get: async (url: string, params?: Params): Promise<any> => {
    const cacheKey = generateCacheKey(url, params);
    const cachedData = cache.get(cacheKey);

    if (cachedData) {
      return cachedData;
    }

    try {
      const response: AxiosResponse = await axios.get(url, { params, withCredentials: false });
      cache.set(cacheKey, response.data);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
  post: async (url: string, data: object): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.post(url, data);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
  put: async (url: string, data: object): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.put(url, data);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
  patch: async (url: string, data: object): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.patch(url, data);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
  delete: async (url: string): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.delete(url);
      return response.data;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
  head: async (url: string): Promise<any> => {
    try {
      const response: AxiosResponse = await axios.head(url);
      return response;
    } catch (error) {
      handleErrors(error);
      throw error;
    }
  },
};

export default apiService;
