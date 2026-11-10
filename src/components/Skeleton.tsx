interface SkeletonProps {
  width: number;
  hieght: number;
}

const SliderSkeleton = ({ width, hieght }: SkeletonProps) => {
  return (
    <div className="flex gap-4 overflow-hidden ">
      <div
        className="bg-gray-400 animate-pulse rounded-2xl"
        style={{
          width: `${width}rem`,
          minHeight: `${hieght}rem`,
        }}
      />
    </div>
  );
};

export default SliderSkeleton;
