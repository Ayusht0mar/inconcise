import { Button } from "@/components/ui/button"
import { Logo } from "./logo"

export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#2c2c2c]">
            <Logo />
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-[#2C2C2C]">
                <Button variant="ghost" size="sm">
                    Privacy Policy
                </Button>

                <Button variant="ghost" size="sm">
                    Terms & Conditiions
                </Button>
            </div>
        </div>
    )
}