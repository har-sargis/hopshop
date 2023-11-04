export const API = `${process.env.NEXT_PUBLIC_WEB_API}/api/v1`;

export const PROFILE_API = `${API}/influencers`;
export const POSTS_API = `${PROFILE_API}/posts`;
export const SIMILAR_API = `${API}/search/similar`;
export const FEATURED_API = `${PROFILE_API}/featured`;
export const PARTNERS_API = `${API}/partners`;
const LIMIT = 12;
export const GET_POSTS_API = (username: string, offset: number) =>
  `${POSTS_API}?username=${username}&limit=${LIMIT}&offset=${offset}`;

export const GET_PROFILE_API = (username: string) => `${PROFILE_API}?username=${username}`;
