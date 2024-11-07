import { cn } from "@/lib/utils";
import { SquareDashedMousePointer } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({
  fontSize = "2xl",
  iconSize = 20,
}: {
  fontSize?: string;
  iconSize?: number;
}) => {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/"
        className={cn(
          "text-2xl font-extrabold flex items-center gap-2",
          fontSize
        )}
      >
        <div className="rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 p-2">
          <SquareDashedMousePointer size={iconSize} className="stroke-white" />
        </div>
        <div>
          <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
            Flow
          </span>
          <span className="text-gray-500">.ai</span>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
