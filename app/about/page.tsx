export const metadata = {
  title: "About - Stellar",
  description: "Page description",
};

import Hero from "@/components/hero-about";
import Story from "@/components/story";
import Cta from "@/components/cta-02";

export default function About() {
  return (
    <>
      <Hero />
      <Story />
      <Cta />
    </>
  );
}
