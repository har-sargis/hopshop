import Image from "next/image";

import AnchorTag from "@/components/Anchor";
import fb from "@assets/assets/images/fb.svg";
import instagram from "@assets/assets/images/inst.svg";
import linkedin from "@assets/assets/images/lin.svg";
import logo from "@assets/hopshop_logo_light.svg";

function ContuctUs() {
  return (
    <section className='py-24  bg-brand-blue-light flex justify-center flex-col items-center gap-4'>
      <h2 className='text-white font-medium text-6xl'>Contact Us</h2>
      <p className='text-white text-lg font-thin'>Can&apos;t find the answer you are looking for?</p>
      <button className='rounded-12 bg-white text-brand-blue-light py-4 px-8 hover:bg-slate-50'>LEAVE AN EMAIL</button>
    </section>
  );
}

export default ContuctUs;