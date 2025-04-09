import React from "react";
import ExploreCategory from "@/components/router/explore/ExploreCategory";
import { sleep } from "@/lib/utils";

export default async function ExplorePage() {
  await sleep(2000);

  return (
    <>
      <ExploreCategory />
    </>
  );
}
