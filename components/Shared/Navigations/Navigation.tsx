import Image from "next/image";
import Link from "next/link";
import { features } from "process";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../Buttons/Button";
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
      <Button route="https://tally.so/r/nP14xb" text=" Join Waitlist" icon />
    </nav>
  );
};

export default Navigation;
