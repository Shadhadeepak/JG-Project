import React from 'react';
import Image from 'next/image';
import bulb from './images/idea (1).png';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const About: React.FC = () => {
  const aboutImageUrl =
    'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600';

  return (
    <div className="container md:px-10 mx-auto px-4 py-8 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="relative h-64 md:h-full">
          <img
            src={aboutImageUrl}
            alt="About JG TAX"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center">
          <h2 className="text-gray-700 font-semibold text-center md:text-left">ABOUT JG TAX</h2>
          <h3 className="text-2xl font-bold text-center md:text-left mt-2 md:mt-4">
            We Provide the Best Tax Services for Your Convenience
          </h3>
          <p className="text-left mt-4 md:mt-6">
            Expert tax consultancy for seamless GST, income tax, TDS, and company registration
            services. Simplifying compliance and maximizing savings for your business. Trust us to
            navigate your tax needs with precision and ease.
          </p>

          {/* Services Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {/* Tax Filing */}
            <div>
              <h2 className="font-semibold text-xl mb-3 text-center md:text-left">Tax Filling</h2>
              <ul>
                <li className="flex items-center gap-3">
                  <FaArrowAltCircleRight className="text-red-500" />
                  GST
                </li>
                <li className="flex items-center gap-3">
                  <FaArrowAltCircleRight className="text-red-500" />
                  TDS
                </li>
                <li className="flex items-center gap-3">
                  <FaArrowAltCircleRight className="text-red-500" />
                  ESI
                </li>
                <li className="flex items-center gap-3">
                  <FaArrowAltCircleRight className="text-red-500" />
                  PF
                </li>
                <li className="flex items-center gap-3">
                  <FaArrowAltCircleRight className="text-red-500" />
                  Income Tax
                </li>
              </ul>
            </div>

            {/* Other Services */}
            <div>
              <h2 className="font-semibold text-xl mb-3 text-center md:text-left">Other Services</h2>
              <ul>
                <li className="flex items-center gap-3">
                  <FaArrowAltCircleRight className="text-red-500" />
                  IE Code
                </li>
                <li className="flex items-center gap-3">
                  <FaArrowAltCircleRight className="text-red-500" />
                  DSC
                </li>
                <li className="flex items-center gap-3">
                  <FaArrowAltCircleRight className="text-red-500" />
                  FSSAI
                </li>
                <li className="flex items-center gap-3">
                  <FaArrowAltCircleRight className="text-red-500" />
                  Personal Loan
                </li>
                <li className="flex items-center gap-3">
                  <FaArrowAltCircleRight className="text-red-500" />
                  Housing Loan
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
