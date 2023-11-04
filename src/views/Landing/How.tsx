import Image from "next/image";

import at from "@assets/assets/svg/at.svg";
import dolar from "@assets/assets/svg/dollar_sign.svg";
import link from "@assets/assets/svg/link.svg";

const data = [
  {
    title: "Fill in Instagram username",
    text: "Our streamlined application process is designed to save you time and effort. Simply apply with your Instagram handle and we'll handle the rest!",
    icon: at,
  },
  {
    title: "Put link in Bio",
    text: "Share the link of your personalized website with your audience and let them explore and get inspired by your style effortlessly.",
    icon: link,
  },
  {
    title: "Start earning money",
    text: "Earn income each time someone makes a purchase through HopShop inspired by your unique sense of style.",
    icon: dolar,
  },
];

function HowItWorks() {
  return (
    <section className='px-40 bg-gray-7 py-12'>
      <h2 className='text-5xl font-medium text-gray-5 text-center'>
        How <span className='text-brand-blue-light'>HopShop</span> Works
      </h2>
      <p className='text-sm font-thin text-gray-5 opacity-70 text-center mt-2'>
        HopShop provides the smoothest experience for you and your loyal audience.
      </p>
      <div className='grid grid-cols-3 gap-6 mt-12'>
        {data.map((item) => (
          <div
            key={item.title}
            className='border border-gray-8 p-7 bg-white text-center rounded-12 flex flex-col justify-center items-center'
          >
            <Image src={item.icon} alt='svg icon' />
            <h2 className='font-medium text-xl text-gray-5 mt-12'>{item.title}</h2>
            <p className='font-thin text-sm text-gray-5 opacity-70 my-4'>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
