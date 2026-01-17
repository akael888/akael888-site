"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface NavLinksProp {
  linkList: { name: string; href: string }[];
}

export default function NavLinks({ linkList }: NavLinksProp) {
  const pathname = usePathname();

  return (
    <>
      {linkList.map((link) => {
        const isActive = link.href == pathname;
        return (
          <div className="flex w-full items-center" key={link.name}>
            <Link
              href={link.href}
              className={clsx(
                "border-1 md:w-full w-full md:text-base text-sm border-bg p-3",
                {
                  "bg-text text-bg pointer-events-none cursor-not-allowed":
                    isActive,
                  "bg-bg text-text hover:border-border": !isActive,
                }
              )}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </>
  );
}
