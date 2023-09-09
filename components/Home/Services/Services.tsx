import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import * as Icons from "../../../constants/Svg/Icons";
import ServiceCard from "./ServiceCard";
const Services = () => {
  const services = [
    {
      title: "For all domains",
      details:
        "VarsityAI is your trusted research companion, enhancing studies in any domain.",
      icon: <Icons.Domains ClassName="h-[40px] w-[40px] flex-shrink-0" />,
    },
    {
      title: "Quick answers",
      details:
        "We provide precise and quick answers to your queries, eliminating the guessing game.",
      icon: <Icons.QuickAnswer ClassName="h-[40px] w-[40px] flex-shrink-0" />,
    },
    {
      title: "Time savings",
      details:
        "Say goodbye to hours of manual searches. Stay ahead of the curve and accelerate your research.",
      icon: <Icons.TimeSaving ClassName="h-[40px] w-[40px] flex-shrink-0" />,
    },
  ];
  return (
    <ComponentWrapper
      id="services"
      style="lg:py-16 py-10 min-h-screen bg-black-main"
    >
      <div className="w-full h-full flex flex-col items-center justify-start gap-10">
        <div className="xl:w-[50%] lg:w-[70%] w-full mx-auto flex flex-col items-center justify-start gap-6">
          <h2 className="text-5xl text-center text-white font-bold">
            Manage your research stress free.
          </h2>
          <p className="text-white/70 text-lg text-center font-medium">
            Whether you're a seasoned researcher or just beginning your academic
            journey, our AI research assistant is here to guide you.
          </p>
        </div>
        <div className="w-full grid md:grid-cols-3 lg:gap-10 gap-6">
          {services.map((item: any, index: number) => (
            <ServiceCard
              key={index}
              title={item.title}
              detail={item.details}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Services;
