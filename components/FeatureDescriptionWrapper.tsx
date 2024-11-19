import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FeatureDescriptionWrapperProps {
  heading: string;
  desc: string;
  href: string;
  img: string;
  styles?: string;
  reverse?: boolean;
}
const FeatureDescriptionWrapper = ({
  heading,
  desc,
  href,
  img,
  styles,
  reverse = false,
}: FeatureDescriptionWrapperProps) => {
  return (
    <section className={cn(styles)}>
      <div className="container p-2 lg:px-36 lg:py-20">
        <div
          className={cn(
            "flex gap-5 xl:gap-40 flex-col lg:flex-row",
            reverse && "lg:flex-row-reverse"
          )}
        >
          <div className="flex-1 flex-center flex-col">
            <div className="text-left pr-10 max-w-[500px]">
              <h1 className="text-2xl sm:text-5xl mb-2 sm:mb-5 font-medium">{heading}</h1>
              <p className="text-sm sm:text-lg">{desc}</p>
              <Link
                href={href}
                className="flex mt-5 underline hover:text-green-400 transition-colors duration-500"
              >
                Learn more
                <ChevronRight />
              </Link>
            </div>
          </div>
          <div className="p-5 flex-1">
            <div className="mx-10 py-5 basis-1/2 md:basis-1/3 lg:basis-1/4 shadow-sm flex-center">
              <img src={img} className="object-cover max-h-[500px]" alt={"image"} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureDescriptionWrapper;
