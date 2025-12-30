import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="flex justify-start items-start p-5 h-[10%] bg-transparent text-black border-l-1 border-r-1 border-b-1">
        {/* Header */}
        <div className="w-[80%] flex justify-start items-start h-full">
          <strong>
            <h1>ELGRATIO F C</h1>
          </strong>
        </div>
        <nav className="flex w-full justify-end gap-5 w-[10%]">
          <div className="border-1 p-3">
            <Link href="/">Home</Link>
          </div>
          <div className="border-1 p-3">
            <Link href="/blog">Blog</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
