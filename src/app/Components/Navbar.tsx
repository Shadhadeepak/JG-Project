"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image';
import logo from '../Components/logo-no-background.png'
import { FaMobile, FaInstagram, FaLinkedin, FaPhone, FaPhoneAlt, FaMailBulk, FaMailchimp, FaVoicemail, FaWhatsapp, FaHamburger, FaOptinMonster } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FaThreads } from 'react-icons/fa6';
import { FcMenu } from 'react-icons/fc';


const Navbar = () => {
  const [open, setopen] = useState(false)
  const [open1, setopen1] = useState(false)
  const [open2, setopen2] = useState(false)
  const [open3, setopen3] = useState(false) 
  return (
    <div className=''>
      <div className=" hidden w-full h-8 md:flex justify-between px-[40px] py-6">
        {/* Phone Number  */}
        <div className="flex   w-1/2 gap-8">
          <div className="flex items-center justify-center gap-3"><FaPhoneAlt color='red' size={16} className='' /> +91 95515 50815 / 9840795498</div>
          <div className="flex items-center justify-center gap-3"><FaMailBulk color='red' size={16} />jgtaxconsultant2015@gmail.com</div>

        </div>
        {/* Social Link */}
        <div className=" w-1/2 flex justify-end gap-8 items-center">
          <Link href=''><FaLinkedin color='red' size={16} /></Link>
          <Link href=''><FaWhatsapp color='red' size={16} /></Link>
          <Link href=''><FaInstagram color='red' size={16} /></Link>
        </div>

      </div>
      <div className="hidden md:flex justify-between w-screen px-[110px] py-8 ">
        {/* LOGO */}
        <div className="w-1/4">
          <Link href='/' ><Image alt='' src={logo} width={80} height={80} /> </Link>
        </div>
        {/* NAVLINK */}
        <div className="flex justify-between w-3/4">
          <div className="">
            <Link href='/' className='flex items-center ' >
              HOME
            </Link>
          </div>
          <div className="flex flex-col ">
            <div >
              <Link href='/' className='flex items-center'onClick={()=>{setopen(!open) ; setopen1(false) ; setopen2(false)}}  >
                START A NEW COMPANY  <MdKeyboardArrowDown size={20} className=''  />
              </Link>
            </div>
            {open && (
              <div className="  ">
                <ul className='flex mt-3    flex-col pl-2 gap-3 text-gray-100 rounded-md bg-black opacity-85 py-8 px-2'>
                  <Link href='/ ' className='hover:opacity-50'>Sole Proprietorship <br /> Registration</Link>
                  <Link href='/  ' className='hover:opacity-50'>Partnership Firm  <br /> Registration </Link>
                  <Link href='/ ' className='hover:opacity-50'>Incorporation</Link>
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col ">
            <div >
              <Link href='/' className='flex items-center' onClick={()=>{setopen1(!open1) ; setopen(false);setopen2(false)}} >
              REGISTRATION SERVICES  <MdKeyboardArrowDown size={20} className='' />
              </Link>
            </div>
            {open1 && (
               <div className="  ">
               <ul className='flex mt-3     flex-col pl-2 gap-2 text-gray-100 rounded-md bg-black opacity-85 py-8 px-2 z-0'>
                 <Link href='/ ' className='hover:opacity-50'>GST Registration</Link>
                 <Link href='/ ' className='hover:opacity-50'>Income Tax Registration</Link>
                 <Link href='/ ' className='hover:opacity-50'>ESI Registration</Link>
                 <Link href='/  ' className='hover:opacity-50'>PF Registration </Link>
                 <Link href='/  ' className='hover:opacity-50'>IE Code Registration </Link>
                 <Link href='/  ' className='hover:opacity-50'>FSSAI Registration </Link>
                 <Link href='/ ' className='hover:opacity-50'>Trade Mark  Registration  </Link>
               </ul>
             </div>
            )}
          </div>
          <div className="flex flex-col  ">
            <div className=''>
              <Link href='/' className='flex items-center' onClick={()=>{setopen2(!open2) ;setopen(false) ; setopen1(false)}} >
              GST & IT FILLING SERVICE <MdKeyboardArrowDown size={20} className='' />
              </Link>
            </div>
            {open2 && (
               <div className=" ">
               <ul className='flex mt-3 flex-col  gap-2 text-gray-100 rounded-md bg-black opacity-85 py-8 px-2 z-0'>
                 <Link href='/ ' className='hover:opacity-50'>3B Return</Link>
                 <Link href='/ ' className='hover:opacity-50'>GSTR1 Filling</Link>
                 <Link href='/ ' className='hover:opacity-50'>GSTR2 Filling</Link>
                 <Link href='/  ' className='hover:opacity-50'>Eway Bill</Link>
                 <Link href='/  ' className='hover:opacity-50'>GST Annual Return</Link>
                 <Link href='/  ' className='hover:opacity-50'>Income Tax Return </Link>
                 <Link href='/ ' className='hover:opacity-50'>TDS Return </Link> 
                 <Link href='/ ' className='hover:opacity-50'>ESI & PF Return </Link>   
                   
               </ul>
             </div>
            )}
          </div>
          
          
          {/* <div className="">
            <Link href='/' className='flex items-center'>
              TAX RETURN <MdKeyboardArrowDown size={20} />
            </Link>
          </div> */}
          <div className="">
            <Link href='/' className='flex items-center'>
              CONTACT
            </Link>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className=" items-center text-center md:hidden">
        <div className="flex justify-between px-3 pt-2">

        <div className="flex items-center pt-3" ><Image src={logo } alt=''width={80} height={80} ></Image></div>
        <div className="flex items-center justify-center pt-3 gap-2" ><FaPhoneAlt color='red' size={16} className='' /><span>9551550815</span> </div>
        </div>

        <div className="pr-3 mt-3 flex items-end justify-end pb-2" onClick={()=>setopen3(!open3)}> 
          
          <FcMenu  color='red' size={30}/>
        </div>
            {
              open3&&
              (
                <div className="w-[100vw] h-[100vh] text-white bg-black">

                    <ul className='flex flex-col h-2/3 justify-between items-start pl-5 pt-5'>
                      <Link href='/' className=''>HOME</Link>
                      <Link href='/'>START A NEW COMPANY</Link>
                      <Link href='/'>REGISTRATION SERVICES</Link>
                      <Link href='/'>GST</Link>
                      <Link href='/'>TAX RETURN</Link>
                      <Link href='/'>CONTACT</Link>
                      <Link href='/'>LOCATION</Link>
                    </ul>
                </div>
              )
            }
      </div>
    </div>
  )
}

export default Navbar