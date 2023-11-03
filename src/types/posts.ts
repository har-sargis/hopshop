export interface Picture {
  imageUrl: string;
  postId: string;
  size: {
    width: number;
    height: number;
  };
}

export interface Post {
  postType: string;
  pictures: Picture[];
}

export interface Data {
  total: number;
  next: number;
  prev: number;
  items: Post[];
  offset: number;
  done: boolean;
}
