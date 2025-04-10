import React from "react";
import { getRandomElementFromArray, sleep } from "@/lib/utils";
import { getChannelById } from "@/lib/dummyData";
import { permanentRedirect } from "next/navigation";
import HeaderBackChanger from "@/components/shared/playlist/HeaderBackChanger";

export default async function ChannelPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await sleep(2000);
  const realParams = await params;

  const channel = await getChannelById(Number(realParams.id));

  const imageSrc = getRandomElementFromArray(channel.songList).imageSrc;

  if (!channel) permanentRedirect("/");

  return (
    <>
      <HeaderBackChanger imageSrc={imageSrc} />
    </>
  );
}
