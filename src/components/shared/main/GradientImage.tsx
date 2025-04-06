import Image from "next/image";
import React from "react";

export default function GradientImage() {
  return (
    <div className="gradient-image-wrapper absolute left-0 right-0 top-0">
      <div className="gradient-image relative w-full h-[400px] after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-40 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-[rgb(10,10,10)] before:z-[10]">
        <Image
          fill
          className="object-cover"
          src="https://plus.unsplash.com/premium_photo-1676923902105-19d5c90d585c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="gradient-img"
        />
      </div>
    </div>
  );
}
