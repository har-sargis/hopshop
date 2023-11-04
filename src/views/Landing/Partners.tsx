import Image from "next/image";
import React from "react";

import AnchorTag from "@/components/Anchor";
import { getPartners } from "@/services/axios/request";

async function Partners() {
  const partners = await getPartners();
  console.log(partners);
  return (
    <div className='flex flex-col items-center py-10 p-40 overflow-x-auto'>
      <h2 className='text-4xl font-semibold mb-2'>Our Partners</h2>
      <p className='text-center mb-10'>
        We partner with over 500 leading brands and retailers worldwide, and our portfolio expands day by day.
      </p>

      <div className='flex overflow-x-scroll space-x-10'>
        {partners.map((partner) => (
          <AnchorTag key={partner.id} className='flex-shrink-0 block' href={partner.url} target='_blank'>
            <Image
              src={partner.logo}
              height={110}
              width={110}
              alt={`${partner} logo`}
              className='h-10 w-auto'
              loading='lazy'
            />
          </AnchorTag>
        ))}
      </div>
    </div>
  );
}

export default Partners;