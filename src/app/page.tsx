import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white w-[100vw] h-[100vh] text-black flex flex-col pl-[20%] pr-[20%]">
      <div className="border-l-1 border-r-1  border-black bg-grey-100 h-full w-full">
        <div className="flex justify-start items-start p-5 h-[10%]">
          {/* Header */}
          <div className="w-[80%] flex justify-center items-center">
            <h1>ELGRATIO F C</h1>
          </div>
          <nav className="flex w-full justify-end gap-5 w-[10%]">
            <div className="border-1 p-3">
              <Link href="/">Home</Link>
            </div>
            <div className="border-1 p-3">
              <Link href="/blog">Blog</Link>
            </div>
          </nav>
        </div>

        <div className=" grid grid-cols-2 grid-rows-4 gap-4 h-[90%] w-full p-2">
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
            <div className="flex justify-center">
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
