"use client";

import React, { useEffect } from "react";
import { useUIState } from "@/hooks/useUIState";

export default function HeaderBackChanger({ imageSrc }: { imageSrc: string }) {
  const { setHeaderImageSrc } = useUIState();

  useEffect(() => {
    if (imageSrc) setHeaderImageSrc(imageSrc);
  }, [imageSrc]);

  return <></>;
}
