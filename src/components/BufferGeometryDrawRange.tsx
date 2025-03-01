import { init } from "@/utils/example";
import { useLayoutEffect, useRef } from "react";

interface BufferGeometryDrawRangeProps {
  width: number;
  height: number;
}

function BufferGeometryDrawRange({
  width,
  height,
}: BufferGeometryDrawRangeProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const remove = init(containerRef.current, width, height);

      return () => remove();
    }

    return () => {};
  }, [height, width]);

  return <div ref={containerRef}></div>;
}

export default BufferGeometryDrawRange;
