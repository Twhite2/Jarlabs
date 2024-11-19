import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { ReactNode } from "react"
import Link from "next/link";

interface CustomButtonProps {
    icon: React.ElementType; 
    label: string,
    buttonClassName: string;
    href: string;
    hideLabel?: boolean
}
const CustomButton = ({icon: Icon, label, buttonClassName, href, hideLabel}: CustomButtonProps) => {
    return (
        <Link href={href} className={cn('flex-between py-4 px-7 rounded-full font-semibold max-w-[200px]', buttonClassName,)}>
            <span className={cn('text-lg')}>{label}</span>
            <Icon className={''} />
      </Link>
  )
}

export default CustomButton