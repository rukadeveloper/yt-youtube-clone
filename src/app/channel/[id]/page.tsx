import React from "react";
import { getRandomElementFromArray, sleep } from "@/lib/utils";
import { getChannelById } from "@/lib/dummyData";
import { permanentRedirect } from "next/navigation";
import HeaderBackChanger from "@/components/shared/playlist/HeaderBackChanger";
import ChannelHeaderInfo from "@/components/router/channel/ChannelHeaderInfo";
import ChannelSongListInfo from "@/components/router/channel/ChannelSongListInfo";
import MainHeader from "@/components/shared/header/MainHeader";
import GradientImage from "@/components/shared/main/GradientImage";
import PlayerWrapper from "@/components/shared/player/PlayerWrapper";
import PagePadding from "@/components/shared/main/PagePadding";

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
      <main className="w-full md:w-[calc(100%_-_100px)] mlg:w-[calc(100%_-_240px)] h-full main-content relative">
        <MainHeader />
        <GradientImage />
        <PlayerWrapper />
        <PagePadding>
          <div className="main-content-wrapper relative z-[60]">
            <HeaderBackChanger imageSrc={imageSrc} />
            <ChannelHeaderInfo channel={channel} />
            <ChannelSongListInfo channel={channel} />
          </div>
        </PagePadding>
      </main>
    </>
  );
}
