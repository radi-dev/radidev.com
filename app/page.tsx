import Link from "next/link";
import React from "react";
import Particles from "./components/particles";



export default function Home() {
  return (
    <section id="Home" className="fixed top-0 left-[5lvw] h-[90lvh] md:h-[100lvh] w-[95lvw] flex flex-col pt-[max(100px,15lvh)] justify-around items-center overflow-hidden">

        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
        quantity={60}
        />

        <div className="font-2 flex items-start p-2 animate-fade-in w-full">
          <div className=" font-black font-2 text-end text-2xl lg:text-4xl">
            <p className="me-10 text-light">HELLO THERE!</p>
            <p className=" text-accent mt-2 lg:mt-12">I AM</p>
          </div>
        </div>


        {/* <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden"> */}
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1
          className="text-transparent duration-1000 bg-primary text-edge-outline animate-title font-3 whitespace-nowrap bg-clip-text font-black cursor-default flex justify-around items-center text-[22vw] max-h-[20vw] w-full"
      >
          <div className="text-center w-full">R</div>
          <div className="text-center w-full">A</div>
          <div className="text-center w-full">D</div>
        <div className="text-center w-full">I</div>
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <article>
          <div className="text-left animate-fade-in pt-5 md:w-[80lvw] lg:w-[40lvw] ml-4 lg:ml-[40lvw] font-mono font-extralight">
            <h2 className="text-xs lg:text-sm text-mid_light ">
              <p>- 👨🏽‍💻 I'm building{" "}
                <Link
                  target="_blank"
                  href="https://advarts.com"
                  className="underline duration-500 text-accent hover:text-zinc-300"
                >
                  AdvArts
                </Link> to streamline lead acquisition using AI-generated content.</p>
            <br />
              <p>- 💼 Open for commisions</p>
          </h2>
        </div>
      </article>

    </section>);

}
