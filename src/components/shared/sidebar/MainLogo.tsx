import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MainLogo() {
  return (
    <div className="main-logo">
      <Link href="/">
        <Image src="/main-logo.svg" alt="main-logo" width={90} height={35} />
      </Link>
    </div>
  );
}
