const CategoryCardSkeleton = () => {
  return Array(7)
    .fill(0)
    .map((e, index) => (
      <div className="w-full p-4 mt-3  my-4 shadow-md flex justify-between border skeleton-border-color">
        <div className="my-1 mx-2 h-6 w-72 shine"></div>
        <div className="my-1 mx-2 h-4 w-4 shine"></div>
      </div>
    ));
};

export default CategoryCardSkeleton;
