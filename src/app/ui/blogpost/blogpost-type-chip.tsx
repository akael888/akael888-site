interface BlogPostTypeChipProp {
  blogType: string;
}

export default function BlogPostTypeChip({ blogType }: BlogPostTypeChipProp) {
  return (
    <>
      <div className="p-1 w-fit text-sm whitespace-nowrap">
        <div className={`p-1 bg-text w-fit rounded-md text-bg italic`}>
          {blogType}
        </div>
      </div>
    </>
  );
}
