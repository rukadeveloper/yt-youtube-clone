export type allSongList = {
  name: string;
  channelId: number;
  channel: string;
  src: string;
  imageSrc: string;
};

export type playList = {
  id: number;
  owner: string;
  playlistName: string;
  songList: allSongList[];
};

export type getAllPlayList = () => Promise<playList[]>;

export type click = (() => void) | undefined;

export type homeCategory = {
  label: string;
  src: string;
};

export type PlayListCarouselProps = {
  title: string;
  subTitle?: string | undefined;
  thumbnail?: React.ReactNode | undefined;
  playListArray: playList[];
};

export type cc = {
  label: string;
  icon: React.ReactNode;
};

export type SongListCarouselProps = {
  title: string;
  subTitle?: string | undefined;
  thumbnail?: React.ReactNode | undefined;
  songListTop10: TopSong[];
};

export interface TopSong extends allSongList {
  rank: number;
  prevRank: number;
}

export type GenreListCarouselProps = {
  title: string;
  subTitle?: string | undefined;
  thumbnail?: React.ReactNode | undefined;
  genreList: string[];
};
