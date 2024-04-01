"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from 'sonner';
import { useRouter } from "next/navigation";

const DocumentsPage = () => {

    const router = useRouter();
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create ({ title: "Untitled"})
            .then((documentId) => router.push(`/documents/${documentId}`))

        toast.promise(promise, {
            loading: "Creating a new note...",
            success: "New Note Created",
            error: "Failed To Create A New Note"
        })
    }

    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
                src="/empty.png"
                height="300"
                width='300'
                alt="Create note"
            />
            <h2 className="text-lg font-medium">
                Welcome to {user?.firstName}&apos;s Inconcise
            </h2>
            <Button
             onClick={onCreate}
             className="dark:text-[#2C2C2C]"
            >
                <PlusCircle className="h-4 w-4 mr-2"/>
                Create a note
            </Button>
        </div>
        
     );
}
 
export default DocumentsPage;