import React from 'react';
import Image, { StaticImageData } from 'next/image';
import gov from './images/819px-TamilNadu_Logo.svg.png';
import TTDC from './images/TTDC.jpg';
import TNEB from './images/TANGEDCO_Logo.png';
import THADCO from './images/tahdco_logo.jpg';
import TAMCO from './images/TAMCO.png';
import G5S from './images/g5s-site-logo-300x91.png';
import TSP from './images/tsp.jpg';
import HUNT from './images/HUNt.png';


interface Client {
  id: number;
  name: string;
  logo: StaticImageData;
  description: string;
}

const clients: Client[] = [
  {
    id: 1,
    name: 'TTDC',
    logo: TTDC,
    description: 'Tamil Nadu Tourism Development Corporation.',
  },
  {
    id: 2,
    name: 'TAMIN',
    logo: gov,
    description: 'Tamil Nadu Minerals Limited.',
  },
  {
    id: 3,
    name: 'TNEB',
    logo: TNEB,
    description: 'Tamil Nadu Electricity Board.',
  },
  {
    id: 4,
    name: 'THADCO',
    logo: THADCO,
    description: 'Tamil Nadu ADI Dravidar Housing and Development Corporation.',
  },
  {
    id: 5,
    name: 'TAMCO',
    logo: TAMCO,
    description: 'Tamil Nadu Minorities Economic Development Corporation',
  },
  {
    id: 6,
    name: 'G5S SECURITY SERVICES',
    logo: G5S ,
    description: 'G5S Security Services: Your trusted partner in comprehensive security solutions.',
  },
  {
    id: 7,
    name: 'TSP Super Cycle',
    logo: TSP ,
    description: 'We are a leading Bi-Cycle store at Chennai.',
  },
  {
    id: 7,
    name: 'Hunt Facility Management services',
    logo: HUNT ,
    description: 'Hunt Facility is one of the best service providers to find people to work for you',
  },
  // Add more clients as needed
];

const OurClient: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-4xl font-bold text-center mb-8">Our Top Clients</h1>
      <div className="overflow-x-auto hide-scrollbar  ">
        <div className="flex space-x-4 py-2 ">
          {clients.map((client) => (
            <div key={client.id} className="bg-white p-6 rounded-lg shadow-md py-4 flex-shrink-0 w-72 hover:shadow-2xl">
              <div className="flex justify-center  mb-4">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h2 className="text-2xl font-semibold text-center mb-4">
                {client.name}
              </h2>
              <p className="text-gray-700 text-center">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClient;
