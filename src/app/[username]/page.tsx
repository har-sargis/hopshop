import Influencer from "@/views/Influencer";

export default function UserPage({ params }: { params: { username: string } }) {
  return <Influencer param={params.username} />;
}
