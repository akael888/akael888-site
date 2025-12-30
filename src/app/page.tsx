import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white h-[90%] text-black flex flex-col">
      <div className="border-l-1 border-r-1  border-black bg-grey-100 h-full w-full">
        <div className=" grid grid-cols-2 grid-rows-4 gap-4 h-full w-full p-2">
          {/* CONTENT */}
          <div className="border-1">
            <div className="flex justify-center">
              <h1>Summary</h1>
            </div>
          </div>
          <div className="border-1 row-span-3 col-start-1 row-start-2">
            <div className="flex justify-center">
              <h1>Projects</h1>
            </div>
          </div>
          <div className="border-1 row-span-3 col-start-2 row-start-1">
            <div className="flex justify-center">
              <h1>Work History</h1>
            </div>
          </div>
          <div className=" col-start-2 row-start-4">
            <div>
              <div className="flex justify-center">
                <h1>Contact</h1>
              </div>
              <div className="w-full">
                <Link href="https://linkedin.com/in/elgratiofc/">
                  <Image
                    src="/linkedin-dark.svg"
                    alt="Linkedin Logo"
                    width={50}
                    height={50}
                  ></Image>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
