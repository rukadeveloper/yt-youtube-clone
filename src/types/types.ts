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
