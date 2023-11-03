import { useEffect, useRef, RefObject } from "react";

import { cb } from "@/types";

const useInfiniteScroll = (cb: cb): RefObject<HTMLDivElement> => {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting) {
          cb();
        }
      },
      { threshold: 1 } // Adjust this value to control how far from the bottom the fetch is triggered
    );

    const loaderNode = loaderRef.current;
    if (loaderNode) {
      observer.observe(loaderNode);
    }

    return () => observer.disconnect();
  }, [cb, loaderRef]);

  return loaderRef;
};

export default useInfiniteScroll;
