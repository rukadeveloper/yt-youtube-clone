"use client";

import React from "react";
import useLibrary from "@/hooks/useLibrary";
import LibraryTopWrapper from "./LibraryTopWrapper";
import PlayListGrid from "./PlayListGrid";

export default function LibraryWrapper() {
  const { clickedContent } = useLibrary();

  return (
    <>
      <LibraryTopWrapper />
      {!clickedContent && <PlayListGrid />}
    </>
  );
}
