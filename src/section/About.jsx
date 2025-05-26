import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { bentoSocialLinks } from "../constants";
import { Me } from "../../public/models/Me";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);
const About = () => {
  useGSAP(() => {
    gsap.from(".card2", {
      opacity: 0,
      duration: 1,
      x: -450,
      ease: "elastic.out(1,0.3)",
      scrollTrigger: {
        trigger: "#about",
        start: "top top",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.from(".card1", {
      opacity: 0,
      duration: 2,
      x: -450,
      y: 200,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: "#c",
        start: "top top",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.from(".card0", {
      opacity: 0,
      duration: 2,
      rotateX: 200,
      ease: "bounce.out",
      scrollTrigger: {
        trigger: "#c",
        start: "top top",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
    });
    gsap.from(".text1", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".text1",
        start: "top bottom",
        end: "bottom top",
        toggleActions: "restart none none none",
      },
    });
  }, []);
  const sendTelegramMessage = async (message) => {
    try {
      const response = await fetch(
        "https://agrishop-1vpe.vercel.app/api/telegram",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await response.json();

      if (data.success) {
        console.log("MS", data);
      } else {
        console.error("MF", data);
      }
    } catch (error) {
      console.error("MF", error);
    } finally {
    }
  };
  useEffect(() => {
    const deviceType = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      ? "Mobile"
      : "Desktop";
    const screenResolution = `${window.screen.width}x${window.screen.height}`;
    sendTelegramMessage(`User: ${deviceType}, Resolution: ${screenResolution}`);
  }, []);
  return (
    <section id="about" className="flex-center relative md:p-8 px-5 ">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div
        id="c"
        className="container w-full h-full md:my-40 md:mb-10 mb-10 my-20 relative z-10"
      >
        <TitleHeader
          title="About Me"
          number="01"
          text="Passionate Creator, Lifelong Learner"
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-6 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full card2">
                <div className="mt-5 ">
                  <h1 className="text-blue-50 mb-20 md:text-5xl text-3xl ">
                    Soroush nassaj
                  </h1>
                  <p className="md:text-2xl mt-2 ">
                    im a web and front-end designer based in Rasht, Iran, with a
                    focus on UI/UX design and animation. I've mostly worked on
                    online store projects, but I've also explored a bunch of
                    different areas and always love creating cool, new stuff.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-5">
              <div className=" bg-[#81817900] hover:cursor-grab rounded-2xl w-full md:h-full h-60">
                <div className="w-full h-full">
                  <Canvas>
                    <ambientLight intensity={3} />
                    {/* <OrbitControls enableZoom={false}  /> */}
                    <Me
                      scale={2.6}
                      position={[0.2, -2.3, 0]}
                      rotation={[0.4, 0, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full card1 ">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Web Design & Dev
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Cleanly Designed, Conversion-focused, and build for easy
                    updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full card0 ">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    UX UI Design
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Seamless web or mobile app design to wow your users.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold text1 ">
                    BE YOURSELF!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold text1 ">
                    BE DIFFERENT!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold text1 ">
                    BUILD DIFFERENT!
                  </h1>
                </div>
              </div>
            </div>
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                <a href={item.href}>
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <div className="flex justify-between items-center h-full">
                      <div className="flex items-center md:gap-5">
                        <img src={item.icon} alt={item.icon} />
                        <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                          {item.name}
                        </h1>
                      </div>
                      <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <img
                          src="/images/arrowupright.svg"
                          alt="arrow-up"
                          className="md:scale-100 scale-50"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
