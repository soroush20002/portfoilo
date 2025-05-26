import React from "react";
import GradientSpheres from "../components/GradientSpheres";
import HeroExperience from "../components/HeroExperience";

export const Hero = () => {
  return (
    <section
      id="home"
      className="w-screen h-dvh overflow-hidden relative text-white-50 md:p-8 px-5"
    >
      <div
        className="absolute top-0 w-full flex justify-center mix-blend-lighten"
        data-aos="fade-down"
        data-aos-duration="2000"
      >
        <video
          className="w-full scale-200 -mt-[355px]"
          autoPlay
          loop
          muted
          playsInline
          src="/blackhole.mp4"
        ></video>
      </div>
      <div className="gradient-box w-full h-96 absolute bottom-0 left-0 z-20"></div>
      <GradientSpheres
        sphere1Class="gradient-sphere sphere-1"
        sphere2Class="gradient-sphere sphere-2"
      />
      <div className="w-full h-full flex-center">
        <div className="container relative w-full h-full">
          <div className="md:mt-10 mt-20">
            <p className="font md:text-2xl text-base">👋 Hey, I&apos;m Here</p>
            <h1 className="font-bold md:text-9xl text-5xl">SOROUSH NJ</h1>
            <h1 className="font-bold md:text-9xl text-5xl">CREATIVE</h1>
          </div>
          <div className="absolute w-full z-30 bottom-20 right-0">
            <div className="flex justify-between items-end">
              <div className="flex flex-col items-center md:gap-5 gap-1">
                <p className="md:text-base text-xs">Explore</p>
                <img
                  src="images/arrowdown.svg"
                  alt="arrowdown"
                  className="size-7 animate-bounce"
                />
              </div>
              <div className="flex flex-col items-end">
                <img src="/images/shape.svg" alt="shape" />
                <h1 className="font-bold md:text-9xl text-5xl">DEVELOPER</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute top-0 left-0">
          <HeroExperience />
        </div>
      </div>
    </section>
  );
};
