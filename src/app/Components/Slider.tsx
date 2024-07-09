"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

const slides = [
    {
      id: 1,
      title: "Tax Return Services",
      subHead:"TAX CONSULTANT IN CHENNAI",
      description: "Make tax return filing stress-free by engaging the top consultant in Chennai !!!.",
      img: "https://images.pexels.com/photos/6863336/pexels-photo-6863336.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/",
      bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
    },
    {
      id: 2,
      title: "GST AND IT Filling !!!",
      description: "GST and income tax together form the backbone of unified taxation in India, creating a single, common market across the nation.",
      img: "https://images.pexels.com/photos/8296981/pexels-photo-8296981.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/",
      bg: "bg-gradient-to-r from-pink-50 to-blue-50",
    },
    {
      id: 3,
      title: "Company Registration",
      description: "Start Your Business Right: Register with Ease Today!",
      img: "https://images.pexels.com/photos/8962465/pexels-photo-8962465.jpeg?auto=compress&cs=tinysrgb&w=600",
      url: "/",
      bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
    },
  ];
const Slider = () => {
    const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-[calc(100vh-32px)] overflow-x-hidden mt-[145px] ">
      <div
        className="w-max h-full flex transition-all ease-in-out duration-1000 overflow-x-hidden"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              
              <h1 className=" text-[#FC4100] text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {slide.title}
              </h1>
              <h2 className=" font-bold text-sm lg:text-xl 2xl:text-2xl text-left ml-8 text-wrap ">
                {slide.description}
              </h2>
              <Link href={slide.url}>
                <button className="rounded-md bg-[#FC4100] text-white font-bold py-3 px-4 ">
                  BOOK APPOINMENT!
                </button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={slide.img}
                alt=""
                fill
                sizes="100%"
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider