import React from "react";
import GenreCard from "./GenreCard";

export default function GenreColumn({ genreList }: { genreList: string[] }) {
  return (
    <div className="genre-column flex flex-col gap-5">
      {genreList.map((genre: string, idx: number) => (
        <GenreCard genre={genre} key={idx} />
      ))}
    </div>
  );
}
