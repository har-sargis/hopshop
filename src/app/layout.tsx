import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";



import "./globals.css";
import Providers from "@/providers";
import logo from "@assets/hopshop_logo.svg";

const inter = Montserrat({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HopShop",
  description: "Monetize your style, Earn Commissions Effortlessly",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={inter.className}>
        <header className='py-3 px-4 lg:px-40'>
          <div className='flex justify-between items-center bg-white'>
            <Link href='/'>
              <Image src={logo.src} width={159} height={25} alt='hop shop' />
            </Link>
            <Link className='text-brand-blue-dark font-medium text-xs' href='/create'>
              Create Shop
            </Link>
          </div>
        </header>
        <Providers>
          <>
            <main>{children}</main>
          </>
        </Providers>
      </body>
    </html>
  );
}