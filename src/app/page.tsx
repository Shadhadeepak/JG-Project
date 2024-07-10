import OurClient from "@/Components/OurClient";
import Slider from "@/Components/Slider";
import Image from "next/image";
import WhatWeDo from "@/Components/Wedo";


export default function Home() {
  return (
    <div className=""> 
      <Slider />
      <OurClient />
      <WhatWeDo />
    </div>
  );
}
