import React from "react";
import HeaderBackChanger from "@/components/shared/playlist/HeaderBackChanger";
import PlayListHeader from "@/components/router/playlist/PlayListHeader";
import SongCardRowWrapper from "@/components/shared/playlist/SongCardRowWrapper";
import { getPlaylistById } from "@/lib/dummyData";
import { getRandomElementFromArray, sleep } from "@/lib/utils";
import { permanentRedirect } from "next/navigation";

export default async function PlayListPage({
  searchParams,
}: {
  searchParams: Promise<{ list: string }>;
}) {
  await sleep(2000);

  const params = await searchParams;

  const playlist = await getPlaylistById(Number(params.list));

  const imageSrc = getRandomElementFromArray(playlist.songList)?.imageSrc;

  if (!playlist) permanentRedirect("/");

  return (
    <>
      <HeaderBackChanger imageSrc={imageSrc} />
      <PlayListHeader playlist={playlist} />
      <SongCardRowWrapper playlist={playlist} />
    </>
  );
}
