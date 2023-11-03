import clsx from "clsx";

const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
  return <div className={clsx(`skeleton w-full bg-gray-300 rounded animate-pulse ${className}`)} />;
};

export default Skeleton;
