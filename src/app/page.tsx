import OurClient from "@/Components/OurClient";
import Slider from "@/Components/Slider";
import Image from "next/image";
import WhatWeDo from "@/Components/Wedo";
import About from "@/Components/About";


export default function Home() {
  return (
    <div className=""> 
      <Slider />
      <About />
      <OurClient />
      <WhatWeDo />
    </div>
  );
}
