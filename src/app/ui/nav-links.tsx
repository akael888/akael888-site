"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      {links.map((link) => {
        const isActive = link.href == pathname;
        return (
          <div className="flex items-center" key={link.name}>
            <Link
              href={link.href}
              className={clsx("border-1 border-white p-3", {
                "bg-black text-white pointer-events-none cursor-not-allowed":
                  isActive,
                "hover:border-black": !isActive,
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
