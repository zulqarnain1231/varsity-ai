import React from "react";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

interface Props {
  text: string;
  styles?: string;
  route?: string;
  icon?: boolean;
  shadow?: string;
}

const Button: React.FC<Props> = ({
  text,
  styles = "text-white bg-gradient-to-r from-brand-main to-brand-secondary",
  route = "/",
  shadow = "",
  icon = false,
}: Props) => {
  return (
    <Link
      href={route}
      className={`flex items-center justify-center gap-2  text-base font-semibold  rounded-[24px]  py-[10px] px-[15px] ${styles} ${shadow}`}
    >
      {text}
      {icon && <AiOutlineArrowRight className="text-white text-[20px]" />}
    </Link>
  );
};

export default Button;
