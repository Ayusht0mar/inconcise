"use client";

import { useScrollTop } from "@/hooks/use-scroll-top";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "@/components/mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";
import { useUser } from "@clerk/clerk-react";

export const Navbar = () =>{

    const { isAuthenticated, isLoading} = useConvexAuth();
    const scrolled = useScrollTop();

    return(
        <div className={cn(
            "z-50 bg-background dark:bg-[#2c2c2c] fixed top-0 flex items-center w-full px-4 py-2", scrolled && "border-b shadow-sm"
        )}>
            <Logo />
            <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
                { isLoading && (
                    <Spinner />
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode="modal">
                            <Button variant="ghost" size="sm">
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton mode="modal">
                            <Button  className="bg-[#446CE4] hover:bg-[#304DA2] sm">
                                Get a free account
                            </Button>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button className="bg-[#446CE4] hover:bg-[#304DA2] sm" asChild>
                            <Link href="/documents">
                                Enter Inconcise
                            </Link>
                        </Button>
                        <UserButton
                        afterSignOutUrl="/"
                        />
                    </>
                )}
                <ModeToggle />
            </div>
        </div>
    )
}