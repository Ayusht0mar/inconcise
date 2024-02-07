import Image from "next/image";
import { Oswald } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Oswald ( {
    subsets: ["latin"],
    weight: ["400","600"],
});

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image 
                src="/logo.svg"
                height="32"
                width="32"
                alt="Logo"
            />
            <p className={cn("text-2xl font-semibold ", font.className)}>
                INCONCISE
            </p>
        </div>
    )
}