"use client"
import React, { useEffect, useState } from 'react';
import { FaBusinessTime, FaPhoneAlt, FaTimes, FaTimesCircle } from 'react-icons/fa';
import { FaLocationPin, FaTimeline } from 'react-icons/fa6';

const Location = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder while waiting for the component to mount
    return <div className="h-[calc(100vh-32px)] overflow-x-hidden mt-[145px] px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 my-9">Loading...</div>;
  }

  return (
    <div className="h-[calc(100vh-32px)] overflow-x-hidden mt-[145px] flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 my-9">
      <div className='w-screen h-auto flex flex-col lg:flex-row mt-8 justify-between'>
        {/* MAP */}
        <div className='w-full lg:w-1/2 h-[200px] lg:h-auto px-4 rounded-md'>
          <div className="w-full h-full shadow-xl">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2018.706474345006!2d80.15799921630557!3d13.053025592513348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDAzJzA5LjIiTiA4MMKwMDknMzYuNSJF!5e0!3m2!1sen!2sin!4v1720630469358!5m2!1sen!2sin"

              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        {/* INFO */}
        <div className='w-full lg:w-1/2 mt-5 lg:mt-0 px-7'>
          <div className='flex flex-col gap-14 mt-5 px-12'>
            {/* COMP NAME */}
            <div className='font-bold text-4xl'>JG Tax Consultant</div>
            {/* WORKING DAYS */}
            <div>
              <div className='font-semibold text-xl flex gap-1 items-center justify'><FaBusinessTime size={20} color='red' className='flex' /> Monday - Saturday</div>
              <div className='font-medium'>8.00 am - 10.00 pm</div>
            </div>
            {/* ADDRESS */}
            <div>
              <div className='flex py-2 font-semibold text-lg items-center gap-1'>
                <div className=""><FaLocationPin  size={20} color='red'/></div>
                No.1/16, 3rd Cross Street, Om Sakthi Nagar, Vanagaram, Chennai-600095.
              </div>
              {/* <div className='font-medium'>Address</div> */}
            </div>
            {/* PHONE */}
            <div className='flex gap-2 py-2 font-semibold text-lg items-center'>
              <div className=""><FaPhoneAlt color='red' size={20} /></div>
              955-155-0815
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
