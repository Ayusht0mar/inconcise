"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { toast } from "sonner";
import { Check, Copy, HeartHandshake, } from "lucide-react";

import { Doc } from "@/convex/_generated/dataModel";
import {
  PopoverTrigger,
  Popover,
  PopoverContent
} from "@/components/ui/popover"
import { useOrigin } from "@/hooks/use-origin";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

interface PublishProps {
  initialData: Doc<"documents">
};

export const Collaborate = ({
  initialData
}: PublishProps) => {
  const origin = useOrigin();
  const update = useMutation(api.documents.update);

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const url = `${origin}/preview/${initialData._id}`;

  const onPublish = () => {
    setIsSubmitting(true);

    const promise = update({
      id: initialData._id,
      isPublished: true,
    })
      .finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading: "Publishing...",
      success: "Note published",
      error: "Failed to publish note.",
    });
  };

  const onUnpublish = () => {
    setIsSubmitting(true);

    const promise = update({
      id: initialData._id,
      isPublished: false,
    })
      .finally(() => setIsSubmitting(false));

    toast.promise(promise, {
      loading: "Unpublishing...",
      success: "Note unpublished",
      error: "Failed to unpublish note.",
    });
  };

  const onCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button size="sm" variant="ghost">
          <h3 className="text-[#2C2C2C] dark:text-[#CFCFCF]">
            Collaborate
          </h3>
        </Button>
      </PopoverTrigger>
      <PopoverContent 
        className="w-72 dark:bg-[#2C2C2C] dark:text-[#CFCFCF]" 
        align="end"
        alignOffset={8}
        forceMount
      >
          <div className="flex flex-col items-center justify-center">
            <HeartHandshake
              className="h-8 w-8 mb-2 text-[#2C2C2C] dark:text-[#CFCFCF]"
            />
            <p className="text-sm font-medium mb-2">
              Under Development
            </p>
            <span className="text-xs mb-4 text-center text-[#2C2C2C] dark:text-[#CFCFCF]">
                Collaboration feature is under development and will be available soon.
            </span>
            <Button
              className="w-full text-xs dark:text-[#2C2C2C]"
              size="sm"
            >
              Coming Soon
            </Button>
          </div>
      </PopoverContent>
    </Popover>
  )
}