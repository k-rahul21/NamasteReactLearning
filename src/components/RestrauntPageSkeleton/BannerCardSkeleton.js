const BannerCardSkeleton = () => {
  return (
    <div className="flex gap-3 overflow-x-auto scrollbar-none no-scrollbar">
      {Array(3)
        .fill(0)
        .map((e, index) => (
          <div
            key={index}
            className="flex flex-col mt-2 p-2 rounded-lg w-80 min-w-max border no-scrollbar skeleton-border-color"
          >
            <div className="my-1 mx-2 h-4 w-16 shine"></div>
            <div className="my-1 mx-2 h-4 w-3/4 shine"></div>
          </div>
        ))}
    </div>
  );
};

export default BannerCardSkeleton;
