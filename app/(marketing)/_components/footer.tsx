import { Button } from "@/components/ui/button"
import { Logo } from "./logo"
import Link from "next/link"

export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#2c2c2c]">
            <Logo />
            <div className="md:ml-auto w-full justify-end flex items-center text-[#2C2C2C]">
                <Button variant="ghost" size="sm">
                <Link href="/privacy-policy">
                    Privacy Policy
                </Link>
                </Button>

                <Button variant="ghost" size="sm">
                <Link href="/terms-and-conditions">
                    Terms & Conditiions
                </Link>
                </Button>
            </div>
        </div>
    )
}