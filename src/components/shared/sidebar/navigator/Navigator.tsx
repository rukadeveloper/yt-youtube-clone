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
    <div className="navigator flex flex-col gap-2 mx-3 pb-3 mlg:mt-[10px] mt-[96px] mlg:border-b mlg:border-solid mlg:border-neutral-700 border-none">
      {routes.map((r) => (
        <Link
          href={r.href}
          key={r.label}
          className={cn(
            "each-navigator mlg:text-[16px] text-[12px] text-white mlg:px-4 py-3 px-2 flex mlg:flex-row flex-col items-center gap-3 hover:bg-neutral-700 mlg:rounded-full rounded-[4px]",
            r.isActive && "bg-neutral-800"
          )}>
          {r.icon}
          <span>{r.label}</span>
        </Link>
      ))}
    </div>
  );
}
