import Image from "next/image";

import AnchorTag from "@/components/Anchor";
import fb from "@assets/assets/svg/fb.svg";
import instagram from "@assets/assets/svg/inst.svg";
import linkedin from "@assets/assets/svg/lin.svg";
import logo from "@assets/hopshop_logo_light.svg";

function Footer() {
  return (
    <footer className='pb-8 pt-16 px-40 bg-gray-5'>
      <div className='flex justify-between items-center pb-16'>
        <div className='flex text-white gap-4 items-center text-xl font-extralight'>
          <Image src={logo} alt='hoshop logo' />
          <span className='opacity-70'>|</span>
          <p className='opacity-70'>
            {" "}
            Don&apos;t wait - <span className='text-brand-orange'>Join HopShop</span> NOW!
          </p>
        </div>
        <div className='flex gap-4 '>
          <AnchorTag href='https://www.instagram.com/hopshop.ai/' target='_blank'>
            <Image src={instagram} alt='instgram link' />
          </AnchorTag>
          <AnchorTag href='https://www.linkedin.com/company/hopshopapp/' target='_blank'>
            <Image src={linkedin} alt='linked in' />
          </AnchorTag>
          <AnchorTag href='https://www.facebook.com/hopshopai'>
            <Image src={fb} alt='facebook link' />
          </AnchorTag>
        </div>
      </div>
      <div className='w-full h-px opacity-20 bg-white' />
      <p className='text-center font-extralight text-white text-sm pt-8'>Copyright © 2023 HopShop Inc.</p>
    </footer>
  );
}

export default Footer;