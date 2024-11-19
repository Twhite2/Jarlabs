import Link from "next/link";
import React from "react";
import CustomButton from "./CustomButton";
import { ArrowDown } from "lucide-react";
import { footerLinks } from "@/data/constants";
import SocialMedia from "@/features/marketing/components/SocialMedia";

const Footer = () => {
  return (
    <footer className="bg-vjl-black text-white p-2">
      <div className="container mx-auto overflow-hidden">
        <div className="flex flex-col lg:flex-row gap-10 p-2 lg:px-36 lg:py-20">
          <div className="flex flex-col justify-between">
            <h1 className="text-xl font-semibold hidden sm:flex text-vjl-bg">
              Visionjar Labs
            </h1>
            <CustomButton
              label="Download"
              icon={ArrowDown}
              buttonClassName="bg-green-500 text-vjl-black border border-[1.5] border-vjl-black mx-auto md:hidden lg:flex"
              href="/"
            />
            <div className="my-5 border-t border-b p-3 border-gray-700 sm:hidden relative">
              <SocialMedia style="size-10" />
            </div>
          </div>
          <div className="flex flex-1 items-center justify-start gap-5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-between items-center">
              {footerLinks.map((item, index) => (
                <div className="flex flex-col" key={index}>
                  <h2 className="font-semibold capitalize mb-2 sm:mb-5 text-xs">
                    {item.heading}
                  </h2>
                  {item.details.map((v, index) => (
                    <Link
                      href={v.path}
                      key={index}
                      className="hover:underline line-clamp-none text-sm sm:text-lg mt-4 capitalize whitespace-nowrap"
                    >
                      {v.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="my-5 p-3 border-gray-700 hidden md:flex lg:hidden w-full">
            <div className="flex-between w-full">
              <CustomButton
                label="Download"
                icon={ArrowDown}
                buttonClassName="bg-green-500 text-vjl-black border border-[1.5] border-vjl-black"
                href="/"
              />
              <SocialMedia style="size-10" />
            </div>
          </div>
        </div>

        <div className="p-5 lg:px-36 lg:py-4 flex gap-5 items-center border-t-2 mt-5 border-gray-700">
          <div className="flex flex-1 text-sm gap-5 md:justify-between">
            <p>{new Date().getFullYear()} &copy; Visionjar Lab</p>
            <Link href={"/"}>Terms & privacy policy</Link>
          </div>
          <div className="hidden lg:flex">
            <SocialMedia style="size-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
