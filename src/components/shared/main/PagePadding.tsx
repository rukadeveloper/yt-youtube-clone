import React from "react";

export default function PagePadding({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="page-padding relative mx-auto lg:px-10 px-[10px] h-full">
      {children}
    </div>
  );
}
