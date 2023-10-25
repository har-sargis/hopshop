import Image from "next/image";
import React from "react";

type ProfileComponentProps = {
  imageSrc: string;
  username: string;
};

function ProfileComponent({ imageSrc, username }: ProfileComponentProps) {
  return (
    <div className="flex items-center bg-white p-2 rounded-lg border border-grey gap-2">
      <Image src={imageSrc} alt="Profile" width={40} height={40} className=" rounded-full"/>
      <span className="text-gray-800">@{username}</span>
    </div>
  );
}

export default ProfileComponent;
