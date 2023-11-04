import Image from "next/image";
import Link from "next/link";



import Comunity from "./Comunity";
import ConactUs from "./ContactUs";
import Footer from "./Footer";
import HowItWorks from "./How";
import Intro from "./Intro";
import Moto from "./Moto";
import Partners from "./Partners";
import Questions from "./Questions";
import styles from "./styles.module.css";
import slideIcon from "@assets/assets/images/arrow-bot.png";
import appScreen from "@assets/assets/images/mobile.png";

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
      <Moto />
      <Intro />
      <HowItWorks />
      <Partners />
      <Comunity />
      <Questions />
      <ConactUs />
      <Footer />
    </>
  );
}

export default LandingView;