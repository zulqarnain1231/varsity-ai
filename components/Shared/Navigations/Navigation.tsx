import Image from "next/image";
import Link from "next/link";
import { features } from "process";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
const Navigation = () => {
  const menu = [
    { name: "Features", route: "features" },
    {
      name: "Pricing",
      route: "pricing",
    },
  ];
  return (
    <nav className="w-full h-[80px] flex items-center justify-between px-5 shadow-md">
      <Link href={"/"} className="h-[50px] w-[130px] relative">
        <Image
          className="w-full h-full object-cover"
          src={"/Assets/Logo.webp"}
          alt=""
          fill
        />
      </Link>
      <div className="flex items-center justify-center gap-4">
        {menu.map((item: any, index: number) => (
          <Link
            key={index}
            href={item.route}
            className="text-black-secondary text-base font-medium hover:text-brand-tartary"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <Link
        href={"https://tally.so/r/nP14xb"}
        className="flex items-center justify-center gap-2 text-white text-base font-semibold bg-gradient-to-r from-brand-main to-brand-secondary rounded-[24px]  py-[10px] px-[15px]"
      >
        Join Waitlist
        <AiOutlineArrowRight className="text-white text-[20px]" />
      </Link>
    </nav>
  );
};

export default Navigation;
