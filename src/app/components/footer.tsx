import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="grid grid-cols-2 justify-start items-center p-5 h-[10%] bg-transparent text-black border-l-1 border-r-1 border-b-1 w-full">
        <div className="">
          <p>© 2025 - Elgratio Latuihamallo</p>
        </div>

        <div className="flex flex-row gap-2 justify-end items-center">
          <Link href="https://linkedin.com/in/elgratiofc/" className="border-1 border-white hover:border-black p-3">
            <Image
              src="/linkedin-dark.svg"
              alt="Linkedin Logo"
              width={25}
              height={25}
            />
          </Link>
          <Link href="https://github.com/akael888" className="border-1 border-white hover:border-black p-3">
            <Image
              src="/github-logo.svg"
              alt="Github Logo"
              width={25}
              height={25}
            />
          </Link>
        </div>
      </footer>
    </>
  );
}
