"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import React, { useMemo } from "react";
import { GoHome } from "react-icons/go";
import { MdOutlineExplore } from "react-icons/md";
import { IoMusicalNotes } from "react-icons/io5";

export default function Navigator() {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        icon: <GoHome size={24} />,
        label: "홈",
        isActive: pathname === "/",
        href: "/",
      },
      {
        icon: <MdOutlineExplore size={24} />,
        label: "둘러보기",
        isActive: pathname === "/explore",
        href: "/explore",
      },
      {
        icon: <IoMusicalNotes size={24} />,
        label: "보관함",
        isActive: pathname === "/library",
        href: "/library",
      },
    ];
  }, [pathname]);

  return (
    <div className="navigator flex flex-col gap-2 m-3 border-b border-solid border-neutral-700">
      {routes.map((r) => (
        <Link
          href={r.href}
          key={r.label}
          className={cn(
            "each-navigator text-white pl-4 py-3 flex items-center gap-3 hover:bg-neutral-700 rounded-full",
            r.isActive && "bg-neutral-800"
          )}>
          {r.icon}
          <span>{r.label}</span>
        </Link>
      ))}
    </div>
  );
}
