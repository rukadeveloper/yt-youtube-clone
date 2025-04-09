import React from "react";
import { genreateRandomHex } from "../../../lib/utils";

export default function GenreCard({ genre }: { genre: string }) {
  const hex = genreateRandomHex();

  return (
    <div className="genre-card">
      <button
        className="bg-[#262626] w-full py-3 text-left px-5 box-border rounded-2xl border-l-[16px]"
        style={{ borderColor: hex }}>
        {genre}
      </button>
    </div>
  );
}
