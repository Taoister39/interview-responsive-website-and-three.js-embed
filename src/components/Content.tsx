import BiomedicalSvg from "@/assets/Biomedical.svg?react";
import ExplorerAICosmosSvg from "@/assets/Explorer AI Cosmos.svg?react";

function Content() {
  return (
    <div className="flex flex-col">
      <section>生物医药智能空间</section>
      <section>
        <BiomedicalSvg />
        <ExplorerAICosmosSvg />
      </section>
      <section>
        <button className="bg-button text-white py-3 px-12">立即使用</button>
      </section>
    </div>
  );
}

export default Content;
