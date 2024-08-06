// import { Compare } from "@/components/ui/compare";
// import { Stars } from "../components/stars";
// import Image from "next/image";
import Hero from "@/components/hero";
import Wobble from "../components/wobble";
import Particles from "../components/magicui/particles";
import { Logos } from "@/components/logos";
import { Pricing } from "@/components/pricing";
import { Reviews } from "@/components/reviews";
import { FAQ } from "@/components/faq";
import CTA from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
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
    </>
  );
}

// <div className="w-full h-[100vh] bg-[#1b263b]">
