"use client";

import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Subtitle from "./subtitle";
import Image from "next/image";

export const HeroArea = () => {
    const { isAuthenticated, isLoading } = useConvexAuth ();
    const { user } = useUser();

    return (
        <div>
            <div className="max-w-3xl space-y-4 pt-48 pb-24">
                <Subtitle
                    pill="✨ Your Documentation Perfected"
                />
            <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold lg:pb-4">
                Say Hello to Productivity!          
                </h1>
                <h3 className="text-base text-gray-600 md:text-xl font-regular max-w-full md:max-w-2xl md:m-auto
                dark:text-[#D3D3D4]">
                Capture and Share your ideas, thoughts, and meeting notes in a structured and organized manner.
                </h3>
            </div>

            <>
            {isLoading && (
                <div className="w-full flex items-center justify-center">
                    <Spinner size="lg" />
                </div>
            )}

            { isAuthenticated && !isLoading && (
                    <Link href="/documents">
                    <Button
                                    className="
                                    bg-[#446CE4]
                                    hover:bg-[#2EB67D]
                                    my-4
                                    "
                                >
                                    Enter {user?.firstName}&apos;s Inconcise
                                    <ArrowRight className="h-4 w-4 ml-2"/>
                                </Button>
                    </Link>
            )}

            {!isAuthenticated && !isLoading && (
                <SignInButton mode="modal">
                    <Button className="
                        bg-[#446CE4]
                        hover:bg-[#2EB67D]
                        ">
                        Get a free account
                    <ArrowRight className="h-4 w-4 ml-2"/>
                    </Button>
                </SignInButton>
            )}
            </>
            

            </div>

            <div className="
                relative
                w-full
                aspect-[3/2]
                lg:w-[750px]
                sm:w-full
                md:w-full
                flex
                justify-center
                items-center
                ">
                    <Image
                        src="/banner.png"
                        fill
                        className="
                        object-fill
                        object-top
                        rounded-2xl
                        "
                        alt="Inconcise Dashboard"
                    />
                    <div
                        className="
                            rounded-2xl
                            bottom-0
                            top-[25%]
                            bg-gradient-to-t
                            from-neutral-600	
                            left-0
                            right-0
                            absolute
                            z-10
                            "
                    ></div>
            </div>
        </div>


    )
}