import IrrisSvgIcon from "@/assets/irriss.svg?react";
import LogoSvgIcon from "@/assets/logo.svg?react";
import Content from "@/components/Content";
import Slogan from "@/components/Slogan";

function App() {
  return (
    <div className="bg-gradient h-screen w-full py-12">
      <header className="flex px-12 items-center justify-start">
        <LogoSvgIcon className="mr-4" />

        <IrrisSvgIcon />

        <div className="flex items-center justify-center h-[40px] mx-7 border-white/45  border-[0.83px]" />

        <Slogan />
      </header>

      <main>
        <aside>
          <Content />
        </aside>
      </main>
    </div>
  );
}

export default App;
