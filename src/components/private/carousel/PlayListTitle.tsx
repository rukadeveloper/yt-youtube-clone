import React from "react";

export default function PlayListTitle({
  title,
  subTitle,
  thumbnail,
}: {
  title: string;
  subTitle: string | undefined;
  thumbnail: React.ReactNode | undefined;
}) {
  return (
    <div className="playlist-title flex gap-3 items-center mb-5 ">
      {thumbnail}
      <div className="flex flex-col-reverse">
        <span className="text-[26px] leading-[26px]">{title}</span>
        <span className="text-[14px] text-neutral-600">{subTitle}</span>
      </div>
    </div>
  );
}
