import Link from "next/link";
import DarkModeButton from "./header/darkmode-button";
import NavLinks from "./header/nav-links";
import NavDropDown from "./header/nav-dropdown";

export default function Header() {
  return (
    <>
      <header className="flex justify-start items-center p-5 h-[10%] bg-bg border-border text-text border-l-1 border-r-1 border-b-1 sticky top-0 z-100">
        {/* Header */}
        <div className="w-full flex justify-start items-center h-full">
          <Link href="/">
            <strong>
              <h1 className="md:text-2xl text-xl font-bold">ELGRATIO F C</h1>
            </strong>
          </Link>
        </div>

        <nav className="flex w-full items-center justify-end gap-2 w-[10%]">
          <DarkModeButton />
          <NavDropDown />
        </nav>
      </header>
    </>
  );
}
