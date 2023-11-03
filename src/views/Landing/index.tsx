import Image from "next/image";
import Link from "next/link";

import slideIcon from "@assets/assets/images/arrow-bot.png";
import appScreen from "@assets/assets/images/mobile.png";

import Comunity from "./Comunity";
import ConactUs from "./ContactUs";
import Footer from "./Footer";
import Partners from "./Partners";
import Questions from "./Questions";
import styles from "./styles.module.css";

function LandingView() {
  return (
    <>
      <div className='bg-grey-wrapper pt-14 pb-36 px-40 grid grid-cols-2 justify-between items-center bg-contain-100 relative'>
        <div className={styles.headerWrapper}>
          <h2 className='text-gray-5 font-medium text-6xl mb-8'>Fashion influence made shoppable</h2>
          <p className='text-gray-6 font-light opacity-70'>Monetize your style, Earn Commissions Effortlessly</p>
          <Link
            href='/create'
            className='bg-brand-blue-light py-5 text-white font-thin rounded-12 text-center w-52 inline-block mt-5'
          >
            JOIN NOW
          </Link>
        </div>
        <Image src={appScreen} alt='app screen' className='ml-auto' />
        <Image
          src={slideIcon}
          className='absolute inset-x-1/2 bottom-0 translate-y-1/4  -translate-x-1/2'
          width={76}
          alt='scroll icon'
        />
      </div>
      <div className='flex flex-col items-center justify-center min-h-screen py-2 px-40'>
        <div className='flex flex-col items-center mb-10'>
          <h1 className='text-4xl font-bold mb-2'>
            Focus on what you do best - inspiring your audience. The rest is on us!
          </h1>
          <p className='text-center text-xl'>
            Unlock the potential of fashion and style with HopShop, the ultimate app for fashion enthusiasts and
            influencers to monetize their looks. We are revolutionizing the way people shop by turning fashion looks on
            your Instagram page into clickable and shoppable experiences. Say goodbye to linking products and answering
            endless comments on where to buy that perfect outfit. With HopShop, every fashion post becomes an
            opportunity to delight your followers and earn commissions.
          </p>
        </div>

        <div className='flex flex-col items-center'>
          <h2 className='text-3xl font-bold mb-6'>HopShop at a glance</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='flex flex-col items-center'>
              <div className='mb-4 p-6 bg-blue-100 rounded-full'>{/* Icon goes here */}</div>
              <h3 className='text-xl font-semibold mb-2'>SHOPPABLE FASHION, SIMPLIFIED</h3>
              <p>
                Unlike other solutions, HopShop uses AI-powered visual search technologies to identify the exact or
                similar products featured on your feed, so you don&apos;t have to spend time searching and linking
                products to your storefront. It&apos;s that easy!
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='mb-4 p-6 bg-blue-100 rounded-full'>{/* Icon goes here */}</div>
              <h3 className='text-xl font-semibold mb-2'>PERSONALIZED WEBSITE WITH INSTAGRAM LOOKS</h3>
              <p>
                We seamlessly connect your fashion content with curated and shoppable products from 500+ brands and
                retailers. We bring together a community of influencers, brands, and fashion lovers, making the shopping
                experience more immersive and rewarding for everyone involved.
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <div className='mb-4 p-6 bg-blue-100 rounded-full'>{/* Icon goes here */}</div>
              <h3 className='text-xl font-semibold mb-2'>COMMISSIONS EARNED FROM EVERY ITEM SOLD</h3>
              <p>
                HopShop empowers influencers by offering a seamless commission-based earning model. As an influencer,
                you&apos;ll earn a percentage of the sales generated from your followers&apos; purchases, regardless of
                whether they buy the exact or similar product featured on your feed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Partners />
      <Comunity />
      <Questions />
      <ConactUs />
      <Footer />
    </>
  );
}

export default LandingView;
