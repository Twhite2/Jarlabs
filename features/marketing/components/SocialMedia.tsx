import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

const socialMedia = [
  {
    href: "/",
    icon: FaSquareXTwitter,
  },
  {
    href: "/",
    icon: FaYoutube,
  },
  {
    href: "/",
    icon: FaFacebook,
  },
];

const SocialMedia = ({ style }: { style: string }) => {
  return (
    <div className="flex-center gap-5 relative">
      {socialMedia.map((item, index) => (
        <Link
          href={item.href}
          key={index}
          className="p-2 relative overflow-hidden group rounded-full border-2 flex-center transition-all duration-1000"
        >
          {/* <span className="absolute inset-0 w-full h-full bg-green-500 transform scale-y-0 group-hover:scale-y-100 opacity-0 transition-transform origin-bottom"></span> */}

          <item.icon className={cn("z-10 group-hover:text-vjl-black", style)} />
        </Link>
      ))}
    </div>
  );
};

export default SocialMedia;
