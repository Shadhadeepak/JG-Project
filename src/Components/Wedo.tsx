import React from 'react';
import Image from 'next/image';

interface Service {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  {
    id: 1,
    title: 'Start Your  Business',
    description: 'Taxteam facilitates the unionization of your businesses, fostering growth across various sectors, including private and public enterprises, among others..',
    imageUrl: 'https://images.pexels.com/photos/5668842/pexels-photo-5668842.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual URL
  },
  {
    id: 2,
    title: ' Registrations',
    description: 'We assist you in obtaining registrations for licensing and certification across areas like TDS, IE Code, GST, and more.',
    imageUrl: 'https://images.pexels.com/photos/8296981/pexels-photo-8296981.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual URL
  },
  {
    id: 3,
    title: 'Tax Filing',
    description: 'Taxteam possesses extensive knowledge and expertise in financial and taxation services.',
    imageUrl: 'https://images.pexels.com/photos/8962519/pexels-photo-8962519.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual URL
  },
  {
    id: 4,
    title: 'Compliance',
    description: 'We provide comprehensive support in drafting and litigation for GST, IT, ESI, PF, FSSAI, and other related areas.',
    imageUrl: 'https://images.pexels.com/photos/6863182/pexels-photo-6863182.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual URL
  },
  {
    id: 5,
    title: 'Loan Services',
    description: 'We offer a range of banking services, including personal loans, business loans, and more.',
    imageUrl: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual URL
  },
  {
    id: 6,
    title: '24/7 Support',
    description: 'We provide 24/7 support for all our services.',
    imageUrl: 'https://images.pexels.com/photos/4491918/pexels-photo-4491918.jpeg?auto=compress&cs=tinysrgb&w=600', // Replace with actual URL
  },
];

const WhatWeDo: React.FC = () => {
  return (
    <div className="container mx-auto px-20 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">What We Do</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative overflow-hidden rounded-lg shadow-lg group h-64 "
          >
            <div className="absolute inset-0" >
              <Image
                src={service.imageUrl}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform      duration-300 ease-in-out transform group-hover:scale-110 hover:bg-black hover:z-20   "
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-4 text-center">
              <h4 className={`text-3xl font-extrabold  mb-2 items-start flex justify-start text-start  text-[#FC4100]`}>{service.title}</h4>
              <p className="text-[#ffffff] font-semibold justify-start text-start mt-3">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
