interface BlogPostTypeChipProp {
  blogType: string;
}

export default function BlogPostTypeChip({ blogType }: BlogPostTypeChipProp) {
  return (
    <>
      <div className="p-1 w-fit text-sm whitespace-nowrap">
        <div className={`p-1 bg-black w-fit rounded-md text-white italic`}>
          {blogType}
        </div>
      </div>
    </>
  );
}
