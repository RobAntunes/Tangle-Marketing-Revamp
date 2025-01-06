import { CardOne } from "./CardOne";
import { CardTwo } from "./CardTwo";
import { CardThree } from "./CardThree";
import { CardFour } from "./CardFour";
import { CardFive } from "./CardFive";
import { CardSix } from "./CardSix";

export default () => {
  const useCases = [
    {
      name: "Payments",
      desc: "Accept instant, free (almost!), and secure payments globally in both fiat and crypto.",
    },
    {
      name: "Gaming",
      desc: "Games where every move counts, every detail is stored, updates are in real time, and with global marketplaces and economies.",
    },
    {
      name: "Supply Chain & Logistics",
      desc: "Track items perfectly from origin as they move around the globe. Record every detail as an intrisic detail.",
    },
    {
      name: "Customs & Taxation",
      desc: "Speed up government operations and ensure compliance with local laws and regulations.",
    },
    {
      name: "Asset Management",
      desc: "Keep a perfect record of asset information through time.",
    },
    {
      name: "Legal",
      desc: "A place of perfect record for all of your contracts, deals, terms, and agreements.",
    },
  ];

  return (
    <section>
      <div className="font-sans mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-base/7 font-semibold text-gray-400 flex justify-start items-center max-w-7xl flex-wrap">
          No Limits
        </h3>
        <h2 className="text-4xl lg:text-6xl font-semibold text-[#374151]">
          Endless Possibilities
        </h2>
        <p className="max-w-xl text-lg lg:text-2">
          Tangle is fully programmable, makes crypto practical, bridges it
          with the fiat system and allows for global applications. What will you build?
        </p>
        <div className="flex flex-wrap gap-6 m-auto mt-12">
          <CardOne title={useCases[0].name} content={useCases[0].desc} />
          <CardTwo title={useCases[1].name} content={useCases[1].desc} />
          <CardThree title={useCases[2].name} content={useCases[2].desc} />

          <CardFour title={useCases[3].name} content={useCases[3].desc} />
          <CardFive title={useCases[4].name} content={useCases[4].desc} />
          <CardSix title={useCases[5].name} content={useCases[5].desc} />
        </div>
      </div>
    </section>
  );
};
