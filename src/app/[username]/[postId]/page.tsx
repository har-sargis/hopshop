import { getSimilarLooks } from "@/services/axios/request";
import Look from "@/views/Look";

export default async function Home({
  params,
  searchParams,
}: {
  params: { username: string; postId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const { username, postId } = params;

  const similarLooks = await getSimilarLooks({
    username,
    post_id: postId,
    gender: null,
    image_url: searchParams?.image_url as string,
  });
  const { width, height, image_url } = searchParams || {};

  return <Look data={similarLooks} image={image_url as string} width={width as string} height={height as string} />;
}
