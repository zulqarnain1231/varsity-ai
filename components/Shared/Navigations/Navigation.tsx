"use client";
import Image from "next/image";
import Link from "next/link";
import { features } from "process";
import React, { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Button from "../Buttons/Button";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdCancel } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevvalue) => !prevvalue);
  };
  const menu = [
    { name: "Features", route: "features" },
    {
      name: "Pricing",
      route: "pricing",
    },
  ];

  return (
    <>
      <nav className="w-full h-[80px] flex items-center justify-between px-5 shadow-md">
        <Link href={"/"} className="h-[50px] w-[130px] relative">
          <Image
            className="w-full h-full object-cover"
            src={"/Assets/Logo.webp"}
            alt=""
            fill
          />
        </Link>
        <div className="md:flex hidden items-center justify-center gap-4">
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
        <div className="md:flex hidden">
          <Button
            route="https://tally.so/r/nP14xb"
            text=" Join Waitlist"
            icon
          />
        </div>
        <HiMenuAlt3
          onClick={toggleDrawer}
          className="md:hidden inline-block text-black-main text-2xl"
        />
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{
          width: "100%",
        }}
      >
        <section className="w-full h-full px-4 py-5">
          <div className="w-full flex items-center justify-end">
            <MdCancel
              onClick={toggleDrawer}
              className="text-brand-tartary text-2xl"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
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
        </section>
      </Drawer>
    </>
  );
};

export default Navigation;
