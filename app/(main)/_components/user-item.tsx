"user client";

import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import { useUser, SignOutButton } from "@clerk/clerk-react";


import {
    Avatar,
    AvatarImage
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";


  export const UserItem = () => {
    const { user } = useUser();
  
    return (
        <div>
            <DropdownMenu>  
                <DropdownMenuTrigger asChild>
                <div  className="flex items-center text-[#CFCFCF] text-sm p-3 cursor-pointer">
                    <div role="button" className="gap-x-2 flex items-center max-w-[150px]">
                        <Image
                            src="/logo.svg"
                            height="20"
                            width="20"
                            alt="Logo"
                        />
                        <span className="text-start font-medium line-clamp-1">
                            {user?.firstName}&apos;s Inconcise
                        </span>
                    </div>
                    <ChevronsLeftRight className="rotate-90 ml-2  h-4 w-4" />
                </div>
                </DropdownMenuTrigger>

                <DropdownMenuContent
                    className="w-80"
                    align="start"
                    alignOffset={11}
                    forceMount
                >
                    <div className="flex flex-col space-y-4 p-2 text-[#2C2C2C] dark:text-[#CFCFCF]">
                        <p className="text-xs font-medium leading-none ">
                            {user?.emailAddresses[0].emailAddress}
                        </p>
                    <div className="flex items-center gap-x-2">
                        <div className="rounded-md bg-secondary p-1"> 
                            <Avatar className="h-8 w-8">
                                <AvatarImage src={user?.imageUrl} />
                            </Avatar>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm line-clamp-1">
                                {user?.fullName}&apos;s Inconcise
                            </p>
                        </div>
                    </div>
                    </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="w-full cursor-pointer text-[#2C2C2C] dark:text-[#CFCFCF] ">
                    <SignOutButton>
                        Log out
                    </SignOutButton>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        


    )
}