import { Picture } from "./posts";
import { SimilarData } from "./products";

export type cb = (args?: any[]) => any;

export interface ILook {
  image: string;
  width: string;
  height: string;
  data: SimilarData | [];
}

export interface Carousel {
  images: Picture[];
  width: number;
  height: number;
}

export interface ProfileCardProps {
  username: string;
  image: string;
}
