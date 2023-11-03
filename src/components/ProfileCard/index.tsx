import Image from "next/image";
import Link from "next/link";
import React from "react";

import { ProfileCardProps } from "@/types";

function ProfileComponent({ username, image }: ProfileCardProps) {
  return (
    username && (
      <div className='p-2 rounded-lg border border-grey mx-4 mb-4'>
        <Link href={`/${username}`} className='flex items-center gap-2'>
          <Image src={image} alt='Profile' width={40} height={40} className=' rounded-full' />
          <span className='text-gray-800'>{username}</span>
        </Link>
      </div>
    )
  );
}

export default ProfileComponent;
