import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex justify-start items-start p-5 h-[10%] bg-transparent text-black border-l-1 border-r-1 border-b-1 sticky top-0 bg-white z-100">
        {/* Header */}
        <div className="w-full flex justify-start items-center h-full">
          <strong>
            <h1 className="text-2xl font-bold">ELGRATIO F C</h1
            >
          </strong>
        </div>
        <nav className="flex w-full justify-end gap-5 w-[10%]">
          <div className="flex items-center">
            <Link href="/" className="border-1 border-white hover:border-black p-3">
              Home
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/blog" className="border-1 border-white hover:border-black p-3">
              Blog
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
