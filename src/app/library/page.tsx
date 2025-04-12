import React from "react";
import PagePadding from "@/components/shared/main/PagePadding";
import PlayerWrapper from "@/components/shared/player/PlayerWrapper";
import GradientImage from "@/components/shared/main/GradientImage";
import MainHeader from "@/components/shared/header/MainHeader";
import LibraryWrapper from "@/components/router/library/LibraryWrapper";
import { sleep } from "@/lib/utils";

export default async function LibraryPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  await sleep(2000);

  const query = await searchParams;

  console.log(query);

  return (
    <>
      <main className="w-full md:w-[calc(100%_-_100px)] mlg:w-[calc(100%_-_240px)] h-full main-content relative">
        <MainHeader />
        <GradientImage />
        <PlayerWrapper />
        <PagePadding>
          <div className="main-content-wrapper relative z-[60]">
            <LibraryWrapper />
          </div>
        </PagePadding>
      </main>
    </>
  );
}
