import React from "react";
import Link from "next/link";
import Image from "next/image";
import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link
        href="/"
        className="flex items-end">
        <Image
          src="/vibedose.svg"
          height={60}
          width={60}
          alt="vibedose-logo"
        />{" "}
        VIBE DOSE
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};
