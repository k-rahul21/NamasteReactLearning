import CardSkeleton from "../CardSkeleton/CardSkeleton";

const SkeletonListing = () => {
  return (
    <div className="flex flex-wrap mt-5 gap-5 ml-5">
      {Array(15)
        .fill(0)
        .map((e, index) => (
          <CardSkeleton key={index} />
        ))}
    </div>
  );
};

export default SkeletonListing;
