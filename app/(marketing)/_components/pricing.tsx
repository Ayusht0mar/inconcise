"use client"

import { Button } from "@/components/ui/button";
import Subtitle from "./subtitle";
import { SignInButton, useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

const Pricing = () => {
    const { isAuthenticated, isLoading } = useConvexAuth ();
    const { user } = useUser();

    return ( 
        <div className="mt-24 text-gray-900 dark:text-[#fff]">
           <Subtitle
                pill="Pricing"
            />
            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Discover the Perfect Plan as per your needs</p>

            <ul
                className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-4
                    justify-center
                    mt-10
                    "
            >
                <li 
                    className="
                    p-4
                    border
                    border-solid
                    rounded-lg
                    justify-start
                    text-start
                    dark:border-[#fff]
                    "
                >
                    <h4 className="font-semibold text-2xl mb-2">Starter</h4>

                    <div>
                        <h2 className="font-semibold text-2xl">₹0</h2>
                        <h5 className="text-base dark:text-[#D3D3D4]"> <br/> Free for lifetime </h5>
                    </div>

                    <>
                        { isLoading && (
                            <Spinner />
                        )}
                        {!isAuthenticated && !isLoading && (
                        <div className="w-full">
                            <SignInButton mode="modal">
                                <Button 
                                    className="
                                        w-full
                                        bg-[#fff]
                                        border
                                        border-solid
                                        border-[#446CE4]
                                        text-[#446CE4]
                                        hover:bg-[#2EB67D]
                                        hover:text-[#fff]
                                        hover:border-[#2EB67D]
                                        dark:text-[#446CE4]
                                        dark:hover:text-[#fff]
                                        my-4
                                        dark:bg-[#2c2c2c]
                                        "
                                >
                                    Get Started
                                </Button>
                            </SignInButton>
                        </div>
                    )}

                {isAuthenticated && !isLoading && (
                    <>
                            <Link href="/documents" >
                                <Button
                                    className="
                                    w-full
                                    bg-[#fff]
                                    border
                                    border-solid
                                    border-[#446CE4]
                                    text-[#446CE4]
                                    hover:bg-[#2EB67D]
                                    hover:text-[#fff]
                                    hover:border-[#2EB67D]
                                    dark:text-[#446CE4]
                                    dark:hover:text-[#2EB67D]
                                    my-4
                                    dark:bg-[#2c2c2c]
                                    "
                                >
                                    Enter {user?.firstName}&apos;s Inconcise
                                </Button>
                            </Link>
                    </>
                )}
                    </>

                    <ul className="text-base dark:text-[#D3D3D4]" >
                        <li> • 10 Free Documents</li>
                        <li> • Add Upto 4 Collaborators</li>
                        <li> • Publish Documents Online</li>
                    </ul>
                </li>
                <li 
                    className="
                    p-4
                    border
                    border-solid
                    rounded-lg
                    justify-start
                    text-start
                    dark:border-[#fff]
                    "
                >
                    <h4 className="font-semibold text-2xl mb-2">Professional</h4>

                    <div>
                        <div className="flex items-baseline">
                        <h2 className="font-semibold text-2xl">₹199</h2>
                        <h5 className="text-base dark:text-[#D3D3D4]">/month</h5>
                        </div>

                        <h5 className="text-base dark:text-[#D3D3D4]">Billed annually. <br/> ₹249 if billed monthly</h5>
                    </div>

                    <Button
                        className="
                        w-full
                        bg-[#446CE4]
                        my-4
                        hover:bg-[#2EB67D]
                        hover:text-[#fff]
                        hover:border-[#2EB67D]
                        "
                    >
                        Coming Soon
                    </Button>

                    <ul className="text-base dark:text-[#D3D3D4]" >

                        <li> • Everything in Starter</li>
                        <li> • Unlimited Documents</li>
                        <li> • Add Upto 20 Collaborators</li>
                    </ul>
                </li>                
            </ul>
        </div>
     );
}
 
export default Pricing;