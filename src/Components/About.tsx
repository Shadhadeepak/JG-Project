import React from 'react';
import Image from 'next/image';
import bulb from './images/idea (1).png'
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import { FaArrowAltCircleRight } from 'react-icons/fa';
const About: React.FC = () => {
  const aboutImageUrl = 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600'; 

  return (
    <div className="container w-5/6 mx-auto px-12 py-8 flex flex-col  md:flex-row ">
      {/* Left Side */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <div className="relative h-64 md:h-full">
          <img
            src={aboutImageUrl}
            alt="About JG TAX"
            className="w-full h-full object-cover "
          />
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex-col flex gap-4 mb-8 md:mb-0  px-12">
        <h2 className='font-semibold  text-gray-700'>ABOUT JG TAX</h2>
        <h3 className='text-[32px] font-bold'>We Provide the Best Tax Services for Your Convenience</h3>
        <div className="text-left">Expert tax consultancy for seamless GST, income tax,TDS  and company registration services. Simplifying compliance and maximizing savings for your business. Trust us to navigate your tax needs with precision and ease.</div>
        {/* whole box */}
        <div className=" w-full flex gap-20">
          <div className="">
            <h2 className='font-semibold text-xl mb-3' >Tax Filling</h2>
            <ul className=''>
              <li className='flex items-center  gap-3'><FaArrowAltCircleRight color='red'/> GST</li>
              <li className='flex items-center  gap-3'><FaArrowAltCircleRight color='red'/> TDS</li>
              <li className='flex items-center  gap-3'><FaArrowAltCircleRight color='red'/> ESI</li>
              <li className='flex items-center  gap-3'><FaArrowAltCircleRight color='red'/> PF</li>
              <li className='flex items-center  gap-3'><FaArrowAltCircleRight color='red' /> Income Tax</li>
            </ul>
          </div>
          <div className="">

          <h2 className='font-semibold text-xl mb-3' >Other  Services</h2>
            <ul className=''>
              <li className='flex items-center  gap-3'><FaArrowAltCircleRight color='red' /> IE Code</li>
              <li className='flex items-center  gap-3'><FaArrowAltCircleRight color='red'/> DSC</li>
              <li className='flex items-center  gap-3'><FaArrowAltCircleRight color='red'/> FSSAI</li>
              <li className='flex items-center  gap-3'><FaArrowAltCircleRight color='red'/> Personal Loan</li>
              <li className='flex items-center  gap-3'><FaArrowAltCircleRight color='red' /> Housing Loan</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
};

export default About;
