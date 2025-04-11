"use client";

import React from "react";
import { BarLoader } from "react-spinners";
import { Skeleton } from "@/components/ui/skeleton";
import PagePadding from "@/components/shared/main/PagePadding";

export default function loading() {
  return (
    <>
      <div className="loader w-full fixed top-0 right-0 left-0 z-[500]">
        <BarLoader color="red" cssOverride={{ width: "100%", zIndex: 500 }} />
      </div>
      <main className="w-auto xs:flex-1 h-full main-content relative">
        <div className="h-[70px] flex items-center fixed top-0 left-0 right-0">
          <Skeleton className="w-full box-border mx-2 h-[40px] rounded-xl" />
        </div>
        <PagePadding>
          <div className="padding-skeleton-wrapper">
            <Skeleton className="w-full h-[38px] mt-[92px]" />
            <div className="mt-24 flex items-center gap-3">
              <Skeleton className="w-[46px] h-[46px] rounded-full" />
              <Skeleton className="w-[100px] h-[46px] rounded-2xl" />
            </div>
          </div>
        </PagePadding>
      </main>
    </>
  );
}
