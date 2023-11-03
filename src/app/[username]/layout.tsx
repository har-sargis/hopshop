import ProfileComponent from "@/components/ProfileCard";
import { getInfluencerProfileData } from "@/services/axios/request";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { username: string; postId: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const profile = await getInfluencerProfileData(params.username);
  return (
    <>
      <ProfileComponent username={profile.instagramUsername} image={profile.profilePicUrl} />
      <div className='p-4 pt-0'>{children}</div>
    </>
  );
}
