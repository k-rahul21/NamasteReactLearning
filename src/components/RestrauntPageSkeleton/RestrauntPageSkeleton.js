import BannerCardSkeleton from "./BannerCardSkeleton";
import CategoryCardSkeleton from "./CategoryListSkeleton";
import "./RestrauntPageSkeleton.scss";

const RestrauntPageSkeleton = () => {
  return (
    <div className="restraunt-page-skeleton w-7/12 m-auto p-3">
      <div className="flex justify-between">
        <div className="name m-2 w-56 h-8 shine"></div>
        <div className="m-2 w-32 h-12 shine"></div>
      </div>
      <div className="group-lines flex flex-col justify-start">
        <div className="my-1 mx-2 h-4 w-36 shine"></div>
        <div className="my-1 mx-2 h-4 w-36 shine"></div>
        <div className="my-1 mx-2 h-4 w-36 shine"></div>
      </div>
      <div className="horizontal-line mt-2"></div>

      <div className="mt-3 mb-1 mx-2 h-4 w-36 shine"></div>
      <BannerCardSkeleton />

      <div className="horizontal-line mt-2"></div>
      <CategoryCardSkeleton />
    </div>
  );
};

export default RestrauntPageSkeleton;
