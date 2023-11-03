export type Point = {
  x: number;
  y: number;
};

export interface Vertices {
  bottomLeft: Point;
  bottomRight: Point;
  topLeft: Point;
  topRight: Point;
}

export interface ISimilarSearch {
  image_url: string;
  post_id: string;
  username: string;
}

export interface SimilarProductData {
  product: {
    url: string;
    retailer: string;
    name: string;
    thumbnail: string;
    currency: string;
    price: number;
    old_price?: number | undefined;
  };
  score: number;
}
export interface SimilarProduct {
  subCategory: string;
  verticesSum: number;
  result: SimilarProductData[]; // Define a more specific type if possible
  vertices: Vertices;
}

export type SimilarData = SimilarProduct[];
