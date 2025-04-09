import React from "react";
import LibraryTopWrapper from "@/components/router/library/LibraryTopWrapper";
import PlayListGrid from "@/components/router/library/PlayListGrid";
import { sleep } from "@/lib/utils";

export default async function LibraryPage() {
  await sleep(2000);

  return (
    <>
      <LibraryTopWrapper />
      <PlayListGrid />
    </>
  );
}
