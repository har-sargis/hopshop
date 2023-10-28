import Image from "next/image";

import logo from "@assets/hopshop_logo.svg";

interface VerificationModalProps {
  onClose: () => void;
}

const VerificationModal: React.FC<VerificationModalProps> = ({ onClose }) => (
  <div>
    <div className='flex justify-center items-center mb-4'>
      <Image src={logo} alt='HopShop' />
      <h2 className='text-xl font-bold'>HOPSHOP</h2>
    </div>
    <p className='mb-6 text-center text-gray-500 text-sm font-normal'>
      Great! We&apos;ve sent a verification email to your inbox. It has all the instructions you need for the next
      steps. Take a look and follow along!
    </p>
    <button onClick={onClose} className='w-full bg-purple-600 text-white p-2 rounded'>
      OK
    </button>
  </div>
);

export default VerificationModal;
