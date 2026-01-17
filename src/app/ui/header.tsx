import Link from "next/link";
import NavLinks from "./nav-links";
import DarkModeButton from "./header/darkmode-button";

export default function Header() {
  return (
    <>
      <header className="flex justify-start items-center p-5 h-[10%] bg-bg border-border text-text border-l-1 border-r-1 border-b-1 sticky top-0 z-100">
        {/* Header */}
        <div className="w-full flex justify-start items-center h-full">
          <strong>
            <h1 className="md:text-2xl text-xl font-bold">ELGRATIO F C</h1>
          </strong>
        </div>

        <nav className="flex w-full items-center justify-end gap-5 w-[10%]">
          <DarkModeButton />
          <NavLinks />
        </nav>
      </header>
    </>
  );
}
