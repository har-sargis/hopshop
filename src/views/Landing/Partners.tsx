import Image from "next/image";
import React from "react";

function Partners() {
  const partners = [
    "fashionette",
    "ZAFUL",
    "Timberland",
    "CalvinKlein",
    "Levis",
    "MANGO",
    "KICKSCREW",
    "CONVERSE",
    "fashionette",
    "ZAFUL",
    "Timberland",
    "CalvinKlein",
    "Levis",
    "MANGO",
    "KICKSCREW",
    "CONVERSE",
    "fashionette",
    "ZAFUL",
    "Timberland",
    "CalvinKlein",
    "Levis",
    "MANGO",
    "KICKSCREW",
    "CONVERSE",
    "fashionette",
    "ZAFUL",
    "Timberland",
    "CalvinKlein",
    "Levis",
    "MANGO",
    "KICKSCREW",
    "CONVERSE",
    // Add paths to your logos here
  ];

  return (
    <div className='flex flex-col items-center py-10'>
      <h2 className='text-4xl font-semibold mb-2'>Our Partners</h2>
      <p className='text-center mb-10'>
        We partner with over 500 leading brands and retailers worldwide, and our portfolio expands day by day.
      </p>

      <div className='flex overflow-x-scroll space-x-10'>
        {partners.map((partner, index) => (
          <div key={index} className='flex-shrink-0'>
            <Image src={`/path_to_your_images/${partner}.png`} alt={`${partner} logo`} className='h-10 w-auto' />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partners;
