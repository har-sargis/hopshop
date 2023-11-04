import Image from "next/image";

import browser from "@assets/assets/svg/browser.svg";
import dolar from "@assets/assets/svg/dolar.svg";
import shoe from "@assets/assets/svg/shoe.svg";

const data = [
  {
    icon: shoe,
    title: "SHOPPABLE FASHION, SIMPLIFIED",
    text: "Unlike other solutions, HopShop uses AI-powered visual search technologies to identify the exact or similar products featured on your feed, so you don't have to spend time searching and linking products to your storefront. It's that easy!",
  },
  {
    icon: browser,
    title: "PERSONALIZED WEBSITE WITH INSTAGRAM LOOKS",
    text: "We seamlessly connect your fashion content with curated and shoppable products from 500+ brands and retailers. We bring together a community of influencers, brands, and fashion lovers, making the shopping experience more immersive and rewarding for everyone involved",
  },
  {
    icon: dolar,
    title: "COMMISSIONS EARNED FROM EVERY ITEM SOLD",
    text: "HopShop empowers influencers by offering a seamless commission-based earning model. As an influencer, you'll earn a percentage of the sales generated from your followers' purchases, regardless of whether they buy the exact or similar product featured on your feed.",
  },
];

function Intro() {
  return (
    <div className='flex justify-evenly items-center py-2 px-40 mb-24'>
      <h2 className='text-5xl font-medium mb-6 text-gray-5' style={{ maxWidth: 310 }}>
        HopShop at a glance
      </h2>
      <div className='flex flex-col gap-12'>
        {data.map((item) => (
          <div key={item.title} className='flex gap-8' style={{ maxWidth: 600 }}>
            <div className='rounded-full h-18 w-18 flex-none border border-brand-blue-light shadow-lg flex items-center justify-center'>
              <Image src={item.icon} alt={item.title} className='rounded-full' />
            </div>
            <div>
              <h2 className='font-thin text-sm mb-5 text-gray-5'>{item.title}</h2>
              <p className='font-thin text-sm text-gray-5'>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Intro;
