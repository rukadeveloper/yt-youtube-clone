import { allSongList, playList } from "@/types/types";
import { create } from "zustand";

interface PlayerState {
  isVisiblePlayer: boolean;
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => void;
  activeSong?: allSongList | null;
  playingPlayList: playList[];
  setPlayingPlayList: (ele: playList) => void;
  setActiveSong: (activeSong: allSongList) => void;
  prevPlayerQueue: allSongList[];
  nextPlayerQueue: allSongList[];
  addSongList: (songList: allSongList[]) => void;
  playNext: () => void;
  playBack: () => void;
}

const usePlayerState = create<PlayerState>((set) => ({
  isVisiblePlayer: false,
  setIsVisiblePlayer: (isVisiblePlayer: boolean) => set({ isVisiblePlayer }),
  activeSong: null,
  playingPlayList: [],
  setPlayingPlayList: (ele: playList) =>
    set((prev) => ({
      ...prev,
      playingPlayList: [ele],
    })),
  setActiveSong: (activeSong: allSongList) => set({ activeSong }),
  prevPlayerQueue: [],
  nextPlayerQueue: [],
  addSongList: (songList: allSongList[]) =>
    set((prev) => {
      const prevSong = prev.activeSong;
      const cloneSongList = [...songList];
      const currentSong = cloneSongList.splice(0, 1)?.[0];

      return {
        activeSong: currentSong,
        prevPlayerQueue: prevSong
          ? [prevSong, ...prev.prevPlayerQueue]
          : prev.prevPlayerQueue,
        nextPlayerQueue: [...cloneSongList],
        isVisiblePlayer: true,
      };
    }),
  playNext: () => {
    set((prev) => {
      const currentSong = prev.activeSong;
      const nextSrc = prev.nextPlayerQueue.splice(0, 1)?.[0];

      return {
        activeSong: nextSrc,
        nextPlayerQueue: prev.nextPlayerQueue,
        prevPlayerQueue: [
          ...(currentSong ? [currentSong] : []),
          ...prev.prevPlayerQueue,
        ],
      };
    });
  },
  playBack: () => {
    set((prev) => {
      const currentSong = prev.activeSong;
      const preSrc = prev.prevPlayerQueue.splice(0, 1)?.[0];

      return {
        activeSong: preSrc,
        nextPlayerQueue: [
          ...(currentSong ? [currentSong] : []),
          ...prev.nextPlayerQueue,
        ],
        prevPlayerQueue: prev.prevPlayerQueue,
      };
    });
  },
}));

export default usePlayerState;
