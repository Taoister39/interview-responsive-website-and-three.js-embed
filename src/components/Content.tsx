import BiomedicalSvg from "@/assets/Biomedical.svg?react";
import ExplorerAICosmosSvg from "@/assets/Explorer AI Cosmos.svg?react";

function Content() {
  return (
    <div className="flex flex-col items-center md:items-start">
      <section className="text-white text-4xl md:text-[69px] font-bold tracking-[0.29em]">
        生物医药智能空间
      </section>
      <section className="mt-5 flex gap-10 flex-wrap justify-center lg:justify-start">
        <BiomedicalSvg />
        <ExplorerAICosmosSvg />
      </section>
      <section className="mt-13">
        <button className="bg-button text-white py-3 px-12 rounded-lg text-sm sm:text-lg md:text-xl font-bold">
          立即使用
        </button>
      </section>
    </div>
  );
}

export default Content;
