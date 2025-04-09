import React from "react";

export default function CategoryMenu({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button className="flex-1 flex gap-4 items-center px-2 py-4 bg-[rgb(46,46,46)] cursor-pointer">
      {icon}
      <span>{label}</span>
    </button>
  );
}
