"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { homepageLinks } from "@/data/constants";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger className="xl:hidden">
        <Menu className="w-10 h-10 text-vjl-black" />
      </SheetTrigger>
      <SheetContent className="w-full flex flex-col gap-4 justify-start">
        {homepageLinks.map((link, index) => (
          <Link
            href={link.href}
            className="capitalize flex font-medium text-2xl"
            key={index}
          >
            <SheetClose asChild>
              <span className="text-vjl-black">{link.label}</span>
            </SheetClose>
          </Link>
        ))}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
