import CTA from "@/components/cta";
import { FAQ } from "@/components/faq";
import { Pricing } from "@/components/pricing";
import { Reviews } from "@/components/reviews";
import Wobble from "@/components/wobble";
import Particles from "@/components/magicui/particles";
import React from "react";

const page = () => {
  return (
    <div className="mt-36">
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
        aria-hidden="true"
      >
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>
      <Wobble />
      <Reviews />
      <Pricing />
      <FAQ />
      <CTA />
      <Particles
        className="absolute inset-0 -z-10"
        quantity={300}
        ease={70}
        size={0.05}
        staticity={40}
        color={"#ffffff"}
      />
    </div>
  );
};

export default page;
