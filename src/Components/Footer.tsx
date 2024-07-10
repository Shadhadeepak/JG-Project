import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../Components/logo-no-background.png'
import { FaMailBulk, FaPhoneAlt } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className=' bg-[#f7f6f5c8] opacity-100 shadow-md'>
      <div className='flex flex-col  lg:flex-row xl:flex-row px-5  xl:gap-14 lg:gap-14'>

        {/* LEFT */}
        <div className='w-full lg:w-1/3 xl:w-1/3 flex flex-col gap-8 xl:gap-8 lg:justify-between lg:gap-8 '>
            
        {/* LOGO */}
        <div className='flex justify-center m-4'>
          <Link href="/">
            <Image alt='' src={logo} width={150} height={150} />
          </Link>
        </div>
        
        {/* ABOUT */}
        <div className='flex flex-col'>
          <div className='font-bold text-2xl py-2 mb-3 xl:gap-3 lg:gap-3'>About Us</div>
          <div>
            <p className='text-lg font-medium mb-2 py-2'>
              JG Tax Consultant: Your Ultimate Destination for All Accounting and Tax Needs!
            </p>
          </div>
          
          {/* location */}
          <div className='flex py-2'>
            <span><p className='font-medium flex items-center gap-3'><FaLocationPin color='red' size={20}/> No.1/16, 3rd Cross Street, Om Sakthi Nagar, Vanagaram, Chennai-600095..</p></span>
          </div>

          {/* email */}
          <div className='flex gap-2 py-2'>
            <FaMailBulk color='red ' size={20} />
            <span className='font-medium'><Link href='mailto:jgtaxconsultant2015@gmail.com'>jgtaxconsultant2015@gmail.com</Link></span>
          </div>

          {/* phone */}
          <div className='flex gap-2 py-2'>
            <FaPhoneAlt color='red' size={20} />
            <span className='font-medium'>955-155-0815</span>
          </div>
        </div>
        </div>

        {/* CENTER */}
        <div className='w-full lg:w-1/3 xl:w-1/3 flex flex-col xl:flex-row gap-8 xl:justify-between xl:gap-8 lg:flex-row  lg:justify-between lg:gap-9 xl:pt-12 lg:pt-12'>
           
        {/* SERVICES */}
        <div className='flex flex-col mb-3 xl:gap-3 lg:gap-3'>
          <div className='font-bold text-2xl py-2 '>Our Services</div>
          <div> 
            <ul className='list-arrow'>
              <li className='py-2 text-lg'><Link href="">Start a new company</Link></li>
              <li className='py-2 text-lg'><Link href="">Registration Services</Link></li>
              <li className='py-2 text-lg'><Link href="">GST</Link></li>
              <li className='py-2 text-lg'><Link href="">Accounts</Link></li>
              <li className='py-2 text-lg'><Link href="">Tax return</Link></li>
            </ul>
          </div>
        </div>
        
        {/* ACCOUNTS */}
        <div className='flex flex-col mb-3'>
          <div className='font-bold text-2xl py-2 '>Accounts</div>
          <div className='mt-9'> 
            <ul className='list-arrow'>
              <li className='py-2 text-lg'><Link href="">Day book</Link></li>
              <li className='py-2 text-lg'><Link href="">Petty cash book</Link></li>
              <li className='py-2 text-lg'><Link href="">Journals</Link></li>
              <li className='py-2 text-lg'><Link href="">Ledgers</Link></li>
              <li className='py-2 text-lg'><Link href="">Balance sheet</Link></li>
            </ul>
          </div>
        </div>
        
        {/* TAX AND RETURNS */}
        <div className='flex flex-col mb-3 xl:gap-3 lg:gap-3'>
          <div className='font-bold text-2xl py-2 '>Tax and Returns</div>
          <div> 
            <ul className='list-arrow'>
              <li className='py-2 text-lg'><Link href="">Tax return</Link></li>
              <li className='py-2 text-lg'><Link href="">Income tax return</Link></li>
              <li className='py-2 text-lg'><Link href="">TDS return</Link></li>
              <li className='py-2 text-lg'><Link href="">ESI return</Link></li>
              <li className='py-2 text-lg'><Link href="">EPF return</Link></li>
              <li className='py-2 text-lg'><Link href="">GST Return</Link></li>
            </ul>
          </div>
        </div>
        </div>

        {/* RIGHT */}
        <div className='w-full lg:w-1/3 xl:w-1/3 flex flex-col xl:flex-row gap-8 xl:justify-between xl:gap-8 lg:flex-row  lg:justify-between lg:gap-8  xl:pt-12 lg:pt-12'>
          {/* START A NEW COMPANY */}
          <div className='flex flex-col mb-3 xl:gap-3 lg:gap-3'>
            <div className='font-bold text-2xl py-2'>Start a new company</div>
            <div> 
              <ul className='list-arrow'>
                <li className='py-2 text-lg'><Link href="">Proprietorship <br /> Registration</Link></li>
                <li className='py-2 text-lg'><Link href="">Incorporation</Link></li>
                <li className='py-2 text-lg'><Link href="">Partnership firm registration</Link></li>
              </ul>
            </div>
          </div>
          
          {/* QUICK LINKS */}
          <div className='flex flex-col mb-3 xl:gap-3 lg:gap-3'>
            <div className='font-bold text-2xl py-2 '>Quick Links</div>
            <div> 
              <ul className='list-arrow'>
                <li className='py-2 text-lg'><Link href="">Proprietorship Registration</Link></li>
                <li className='py-2 text-lg'><Link href="">Incorporation</Link></li>
              </ul>
            </div>
          </div>

          {/* DEVELOPED BY */}
        </div>
        </div>
        {/* <div className="ring-1 ring-gray-300 fon w-full"></div> */}
        <div className="flex justify-between  pb-1 px-20 items-center text-sm text-gray-900">
          <div className="">
            <h2>All Rights Reserved &copy; 2024</h2>
          </div>
          <div className="">
            <div className=" hidden justify-between md:flex ">
              Developed By: &nbsp;&nbsp;<Link href=''>Shadha deepak</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Link href=''>Charumathi</Link>
            </div>
          </div>
          
        </div>
       
      </div>
  )
}

export default Footer
