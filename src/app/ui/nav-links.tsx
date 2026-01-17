"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const links = [
    { name: "home", href: "/" },
    { name: "blog", href: "/blog" },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = link.href == pathname;
        return (
          <div className="flex w-fit items-center" key={link.name}>
            <Link
              href={link.href}
              className={clsx("border-1  md:text-base text-sm border-bg p-3", {
                "bg-text text-bg pointer-events-none cursor-not-allowed":
                  isActive,
                "bg-bg text-text hover:border-border": !isActive,
              })}
            >
              {link.name}
            </Link>
          </div>
        );
      })}
    </>
  );
}
