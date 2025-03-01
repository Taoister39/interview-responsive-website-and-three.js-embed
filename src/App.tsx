import IrrisSvgIcon from "@/assets/irriss.svg?react";
import LogoSvgIcon from "@/assets/logo.svg?react";
import BufferGeometryDrawRange from "@/components/BufferGeometryDrawRange";
import Content from "@/components/Content";
import Slogan from "@/components/Slogan";
import { useEffect, useMemo, useRef, useState } from "react";

function App() {
  const mainRef = useRef<HTMLElement>(null);
  const [mainHeight, setMainHeight] = useState(100);
  const [mainWidth, setMainWidth] = useState(100);

  const drawRangeSize = useMemo(
    () => (mainHeight > mainWidth ? mainWidth : mainHeight),
    [mainHeight, mainWidth]
  );

  useEffect(() => {
    const resizeHandle = () => {
      if (mainRef.current) {
        setMainHeight(mainRef.current.offsetHeight);
        setMainWidth(mainRef.current.offsetWidth);
      }
    };

    resizeHandle();

    window.addEventListener("resize", resizeHandle);

    return () => {
      window.removeEventListener("resize", resizeHandle);
    };
  }, []);

  return (
    <div className="bg-gradient min-h-screen w-full flex flex-col">
      <header className="flex-wrap justify-center gap-y-2 flex px-12 items-center md:justify-start mt-12">
        <LogoSvgIcon className="mr-4" />

        <IrrisSvgIcon className="mr-4 md:mr-0" />

        <div className="hidden md:flex items-center justify-center h-[40px] mx-7 border-white/44  border-[0.83px]" />

        <Slogan />
      </header>

      <main
        ref={mainRef}
        className="px-0 sm:px-31 my-16 flex flex-col xl:flex-row justify-center items-center grow gap-35.5"
      >
        <aside>
          <Content />
        </aside>

        <section>
          <BufferGeometryDrawRange
            width={drawRangeSize - 16}
            height={drawRangeSize - 16}
          />
        </section>
      </main>

      <footer className="flex mb-10 gap-x-12 gap-y-1  flex-wrap justify-center text-white/53">
        <span>©Copyright 2025 LUMINIRIS</span>
        <span>蜀ICP备2023000608号-2</span>
      </footer>
    </div>
  );
}

export default App;
