import { init } from "@/utils/example";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

function BufferGeometryDrawRange() {
  const [mainHeight, setMainHeight] = useState(100);
  const [mainWidth, setMainWidth] = useState(100);

  const containerRef = useRef<HTMLDivElement>(null);

  const drawRangeSize = useMemo(
    () => (mainHeight > mainWidth ? mainHeight : mainWidth) - 16,
    [mainHeight, mainWidth]
  );

  useEffect(() => {
    const resizeHandle = () => {
      if (containerRef.current) {
        setMainHeight(containerRef.current.offsetHeight);
        setMainWidth(containerRef.current.offsetWidth);
      }
    };

    requestAnimationFrame(() => resizeHandle());

    window.addEventListener("resize", resizeHandle);

    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  useLayoutEffect(() => {
    if (containerRef.current) {
      return init(containerRef.current, drawRangeSize, drawRangeSize);
    }
  }, [drawRangeSize]);

  return <div className="w-full h-full" ref={containerRef}></div>;
}

export default BufferGeometryDrawRange;
