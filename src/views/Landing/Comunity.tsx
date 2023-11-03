import Link from "next/link";

import styles from "./styles.module.css";

const Users = [1, 2, 3, 4, 5];

const Influencer = () => {
  return <div className='rounded-full border-4 border-white -mr-10' style={{ height: 160, width: 160 }}></div>;
};
function Comunity() {
  return (
    <section className='pt-20 pb-14 px-40 '>
      <div className='bg-gray-7 rounded-12 p-12 flex flex-col gap-14 justify-center items-center'>
        <h2 className='text-gray-5 font-medium text-5xl text-center'>Join the HopShop Community Today</h2>
        <div className='flex'>
          {Users.map((user) => (
            <Influencer key={user} />
          ))}
        </div>
        <p className={`text-gray-5 opacity-70 font-thin text-center ${styles.comunitySubtitle}`}>
          Ready to take your fashion influence to the next level? Join the HopShop community today and start
          transforming your followers&apos; shopping experiences. HopShop is the platform that empowers you to monetize
          your creativity, enhance your audience&apos;s shopping journey, and build a sustainable career as a fashion
          and lifestyle influencer.
        </p>
        <Link
          className='bg-brand-blue-light py-5 text-white font-thin rounded-12 text-center w-52 inline-block mt-5'
          href='/create'
        >
          JOIN NOW
        </Link>
      </div>
    </section>
  );
}

export default Comunity;
