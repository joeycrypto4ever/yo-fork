import React from "react";
import { cn } from "../lib/utils";

function MainButton({
  className,
  children,
  link,
}: {
  className?: string;
  children: React.ReactNode;
  link: string;
}) {
  return (
    <a
      className={cn(
        "bg-main text-white md:text-[13px] hover:scale-105 duration-300 lg:text-[16px] md:py-2 px-4 lg:py-3 rounded-full",
        className
      )}
      href={link}
    >
      {children}
    </a>
  );
}

export default MainButton;
