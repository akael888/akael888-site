import Link from "next/link";

export default function blog({}) {
  return (
    <div className="bg-white h-[90%] text-black flex flex-col">
      <div className="border-l-1 border-r-1  border-black bg-grey-100 h-full w-full">
        <div className="min-h-[90%] grid grid-cols-3 grid-rows-4 gap-4 p-4">
          <div className="border-1 col-span-2 row-span-4">Blog Post</div>
          <div className="border-1 row-span-3 col-start-3">Projects</div>
          <div className="border-1 col-start-3 row-start-4">Contact</div>
        </div>
      </div>
    </div>
  );
}
