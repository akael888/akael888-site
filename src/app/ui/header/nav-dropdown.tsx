"use client";

import { useState } from "react";
import NavLinks from "./nav-links";
import { usePathname } from "next/navigation";
import path from "path";
import clsx from "clsx";

export default function NavDropDown() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { name: "home", href: "/" },
    { name: "blog", href: "/blog" },
  ];

  function handleToggleNavChanges() {
    setNavOpen(!navOpen);
  }

  const pathCheck = pathname === "/" || pathname === "/blog";

  return (
    <>
      <div className="md:hidden relative w-full">
        <button
          className= {clsx("border-1 p-1 pr-2 w-full text-right ",{"bg-text text-bg":pathCheck})}
          onClick={() => {
            handleToggleNavChanges();
          }}
        >
          {pathname === "/" ? "home" : pathname === "/blog" ? "blog" : "nav."}
        </button>
        {navOpen ? (
          <>
            <div className="absolute w-fit justify-center border-1 p-1 right-0 bg-bg top-10">
              <div className="flex flex-col">
                <NavLinks linkList={links} />
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className="md:flex hidden md:flex-row gap-2 w-full ">
        <NavLinks linkList={links} />
      </div>
    </>
  );
}
