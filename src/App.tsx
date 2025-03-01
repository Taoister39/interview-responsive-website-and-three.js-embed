import IrrisSvgIcon from "@/assets/irriss.svg?react";
import LogoSvgIcon from "@/assets/logo.svg?react";
import BufferGeometryDrawRange from "@/components/BufferGeometryDrawRange";
import Content from "@/components/Content";
import Slogan from "@/components/Slogan";

function App() {
  return (
    <div className="bg-gradient min-h-screen w-full flex flex-col">
      <header className="flex-wrap justify-center gap-y-2 flex px-12 items-center md:justify-start mt-12">
        <LogoSvgIcon className="mr-4" />

        <IrrisSvgIcon className="mr-4 md:mr-0" />

        <div className="hidden md:flex items-center justify-center h-[40px] mx-7 border-white/44  border-[0.83px]" />

        <Slogan />
      </header>

      <main className="px-0 sm:px-31 my-16 flex flex-col xl:flex-row justify-center items-center grow gap-35.5">
        <aside>
          <Content />
        </aside>

        <section className="w-full h-full">
          <BufferGeometryDrawRange />
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
