import Link from "next/link";

export default function NotFound() {
  return (
    <main className=" h-screen w-full">
      <div className="flex flex-col items-center justify-center gap-2 border-l-1 border-r-1 h-full border-black">
        <h2 className="text-xl font-semibold text-black">404 Not Found</h2>
        <Link
          href="/"
          className="mt-4  border-1 px-4 py-2 text-sm text-black transition-colors hover:bg-gray-400"
        >
          Go Back
        </Link>
      </div>
    </main>
  );
}
