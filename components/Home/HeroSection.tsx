"use client";
import React from "react";
import ComponentWrapper from "../Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../Shared/Buttons/Button";
import { Fade, Slide } from "react-awesome-reveal";
const HeroSection = () => {
  return (
    <ComponentWrapper
      id="hero"
      style="w-full min-h-[calc(100vh-80px)] flex items-center py-10 lg:py-0"
    >
      <div className="w-full h-full grid lg:grid-cols-2 lg:gap-0 gap-8 place-items-center">
        <Fade triggerOnce className="w-full flex items-center justify-center">
          <aside className="sm:w-[70%] w-full flex flex-col items-start justify-start gap-4">
            <h1 className="text-5xl text-black-main font-bold">
              Your AI Academic Research Assistant
            </h1>
            <p className="text-lg text-black-main/70 font-normal">
              VarsityAI is a tool to help academic researchers save hundreds of
              hours by eliminating endless manual searches to find relevant
              information. Our AI answers complicated queries in seconds
              simplifying the process of digesting complex academic literature,
              making research workflow more efficient and collaborative.{" "}
            </p>
            <Button
              route="https://tally.so/r/nP14xb"
              text="Join Waitlist"
              shadow="shadow-main"
              icon
            />
          </aside>
        </Fade>
        <Slide
          direction="up"
          triggerOnce
          className="w-full flex items-center justify-center"
        >
          <aside className="lg:w-full sm:w-[70%] w-full h-[490px] relative">
            <Image
              className="w-full h-full object-cover"
              src={"/Assets/Hero.webp"}
              alt=""
              fill
            />
          </aside>
        </Slide>
      </div>
    </ComponentWrapper>
  );
};

export default HeroSection;
