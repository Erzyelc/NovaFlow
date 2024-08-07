"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../components/ui/wobble-card";

export default function Wobble() {
  return (
    <div className="mt-20" id="features">
      <div className="mx-auto max-w-5xl text-center">
        <h4 className="text-xl font-bold tracking-tight text-gray-400 dark:text-white">
          FEATURES
        </h4>
        <h2 className="text-4xl font-bold tracking-tight text-[#e0e1dd] dark:text-white sm:text-6xl">
          Why Novaflow?... Why not Novaflow?
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto mt-20 mb-20 w-full">
        <WobbleCard
          containerClassName="col-span-1 lg:col-span-2 h-full bg-gradient-to-tr  from-[#9089fc] to-[#ff80b5]  min-h-[500px] lg:min-h-[300px]"
          className=""
        >
          <div className="max-w-xs">
            <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Signup for blazing-fast cutting-edge state of the art cloud
              solutions
            </h2>
            <p className="mt-4 text-left  text-base/6 text-neutral-200">
              With over 100,000 mothly active users, Novaflow is the most
              popular cloud platform for developers.
            </p>
          </div>
          <Image
            src="/hero.svg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-[#415a77]">
          <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            The first rule of Novaflow is: You do not talk about Novaflow.
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Just kidding, we love to talk about Novaflow. We are passionate
            about our platform and we love to share our passion with you.
          </p>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]  min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Signup for the future of art AI solutions
            </h2>
            <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
              We utilize the latest in AI technology to bring you the most
              cutting edge solutions.
            </p>
          </div>
          <Image
            src="/hero.svg"
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          />
        </WobbleCard>
      </div>
    </div>
  );
}
