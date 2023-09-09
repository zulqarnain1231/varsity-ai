import React from "react";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full flex sm:flex-row flex-col items-center justify-between gap-6 sm:py-10 py-5 border-t-2 px-5">
      <p className="text-black-main/70 text-base font-medium">
        © {year} VarsityAI Limited. All Rights reserved
      </p>
      <HiOutlineMail className="text-[24px] text-brand-tartary" />
    </footer>
  );
};

export default Footer;
