import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({
  fontSize = "lg",
  iconSize = 16,
}: {
  fontSize?: string;
  iconSize?: number;
}) => {
  return (
    <div className="flex gap-2">
      <Link
        href="/"
        className={cn(
          "text-lg items-center flex justify-start gap-2",
          fontSize
        )}
      >
        <div className="rounded-xl bg-gradient-to-r from-[#d97757]/80 to-[#d97757] dark:from-[#d97757] dark:to-[#d97757] p-2">
          <SquareDashedMousePointer size={iconSize} className="stroke-white" />
        </div>
        <div>
          <span className="bg-gradient-to-r from-[#d97757]/80 font-bold to-[#d97757] dark:from-[#d97757]/80 dark:to-[#d97757] bg-clip-text text-transparent">
            Flow
          </span>
          <span className="text-gray-500 dark:text-gray-400">.ai</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
