import { homepageLinks } from "@/data/constants";
import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";
import { ArrowDown, ChevronRight, Menu } from "lucide-react";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full flex-between py-2 px-4 bg-vjl-bg sticky top-0">
      <MobileNav />
      <Image src={'/visionjarlab.jpeg'} width={32} height={32} alt="logo" />
      <div className="flex-1 hidden xl:flex">
        <div className="flex-center w-full">
          <div className="flex gap-10 capitalize text-lg">
            {homepageLinks.map(({ label, href }, index) => (
              <Link href={href} className="" key={index}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className=" gap-5 hidden xl:flex">
        <CustomButton
          label="Log in"
          icon={ChevronRight}
          buttonClassName="bg-white text-vjl-black border border-[1.5] border-vjl-black"
          href="/"
        />
        <CustomButton
          label="Download"
          icon={ArrowDown}
          hideLabel
          buttonClassName="bg-green-500 text-vjl-black border border-[1.5] border-vjl-black"
          href="/"
        />
      </div>
      <div className="xl:hidden">
        <Button
          asChild
          className="rounded-full size-8 flex-center bg-green-500"
        >
          <Link href="/">
            <ArrowDown className="size-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
