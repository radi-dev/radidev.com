import Link from "next/link";
import React from "react";
import Particles from "./components/particles";



export default function Home() {
  return (
    <section id="Home" className="lg: h-[85lvh] mt-[max(100px,15lvh)] flex flex-col -mx-[10vw]">


      <div className="pl-[10lvw] text-light font-black p-2 text-6xl font-2">
        <p>HELLO!</p>
        <p className="ps-32 text-accent">I AM</p>
      </div>


      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden">
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={500}
        />
        <h1
          className=" text-transparent duration-1000 bg-primary text-edge-outline animate-title font-3 whitespace-nowrap bg-clip-text font-black cursor-default flex justify-around items-center text-[22vw] max-h-[20vw] w-full"
        >

          <div className="w-1/2"></div>
          <div className="text-center w-full">R</div>
          <div className="text-center w-full">A</div>
          <div className="text-center w-full">D</div>
          <div className="text-center w-full">I</div>
          <div className="w-1/2"></div>
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      </div>


      <article
      // className="relative md:left-[10lvw] lg:left-[50lvw] pt-5 md:w-[80lvw] lg:w-[40lvw]  text-light font-light p-1 text-2xl"
      >
        <div className="my-16 text-left animate-fade-in pt-5 md:w-[80lvw] lg:w-[40lvw] ml-[10lvw] lg:ml-[50lvw]">
          <h2 className="text- sm text-mid_light ">
            I'm building{" "}
            <Link
              target="_blank"
              href="https://advarts.com"
              className="underline duration-500 text-accent hover:text-zinc-300"
            >
              AdvArts
            </Link> to streamline lead acquisition using AI-generated content.
            <p>Open for commisions</p>
          </h2>

        </div>

      </article>





    </section>);
  {  /*  <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-secondary via-zinc-600/20 to-secondary">

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
       Ra
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
          I'm building{" "}
          <Link
            target="_blank"
            href="https://advarts.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            unkey.dev
          </Link> to solve API authentication and authorization for developers.
        </h2>
      </div>
    </div>
    */
  }


}
