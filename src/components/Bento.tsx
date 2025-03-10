import card1 from "../assets/cross-chain-bridge.png";
import card2 from "../assets/lightning-bolt.png";
import card3 from "../assets/multi-currency-support.png";
import card4 from "../assets/token-swap.png";
import card5 from "../assets/smart-contracts.png";

export default function Bento() {
  return (
    <div className="bg-white py-24 sm:py-32 font-sans">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base/7 font-semibold text-gray-400">The Future</h2>
        <p className="mt-2 max-w-xl text-pretty text-4xl font-semibold text-[#374151] sm:text-5xl">
          Transfer value, your way.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src={card1.src}
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-gray-400">
                  {" "}
                  Chains, Unchained
                </h3>
                <p className="mt-2 text-lg font-medium text-[#374151]">
                  Transactions, not Blocks
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  <strong>Evolutionary Addresses</strong> allow Tangle to
                  process all transactions locally on your device,{" "}
                  <em>
                    <b>without consensus</b>
                  </em>
                  .
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src={card2.src}
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-gray-400">
                  Don't Blink
                </h3>
                <p className="mt-2 text-lg font-medium text-[#374151]">
                  Lightspeed
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Process transactions at the speed of light, not the network.
                  Experience the possibilities of a system that is infinitely
                  scalable.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src={card3.src}
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-gray-400">
                  Practical
                </h3>
                <p className="mt-2 text-lg font-medium text-[#374151]">
                  It Just Works
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Seamless integration with both fiat and crypto, Tangle is made
                  for real-world utility.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
              <img alt="" src={card4.src} className="h-80 object-cover" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-gray-400">P2P</h3>
                <p className="mt-2 text-lg font-medium text-[#374151]">
                  Wallet to Wallet Transfers
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Eliminate intermediaries and risk factors, value transfers
                  directly from wallet to wallet.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img alt="" src={card5.src} className="h-80 object-cover" />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-gray-400">
                  10101101
                </h3>
                <p className="mt-2 text-lg font-medium text-[#374151]">
                  Programmable Money
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Tangle supports smart contracts and apps that integrate value generation & transfer.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          </div>
        </div>
      </div>
    </div>
  );
}
