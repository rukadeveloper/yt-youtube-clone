import React from "react";
import { cn } from "@/lib/utils";

export default function PagePadding({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "page-padding relative mx-auto lg:px-10 px-[10px] h-full",
        className
      )}>
      {children}
    </div>
  );
}
