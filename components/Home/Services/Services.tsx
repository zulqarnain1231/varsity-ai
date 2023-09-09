import React from "react";
import ComponentWrapper from "@/components/Shared/Wrappers/ComponentWrapper";
import Image from "next/image";
import * as Icons from "../../../constants/Svg/Icons";
const Services = () => {
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
        <div className="w-full grid grid-cols-3 gap-10">
          <div className="w-full flex flex-col items-start justify-start gap-4 rounded-[17px] p-6 relative gradient-border">
            <div className="w-full flex items-center justify-start gap-2">
              <Icons.Domains ClassName="h-[40px] w-[40px]" />
              <h3 className="text-[22px] leading-7 text-white font-bold">
                For all domains
              </h3>
            </div>
            <p className="text-white/70 text-lg font-normal">
              VarsityAI is your trusted research companion, enhancing studies in
              any domain.
            </p>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Services;
