import React from "react";
import cn from "clsx";

const SpinnerbLoader = ({ className }: any) => {
  return (
    <span
      className={cn(
        "inline-block h-6 w-6 rounded-full border-2 border-gray-300 border-r-gray-600 animate-spin",
        className
      )}
    />
  );
};

export default SpinnerbLoader;
