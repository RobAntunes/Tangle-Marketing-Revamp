import React from "react";
import { ArrowRight, Lock, ShieldCheck, Wallet } from "lucide-react";
import { TokenIcon } from "@web3icons/react";

const FlowBox = ({ title, children, color, icon: Icon }) => (
  <div className={`p-6 rounded-lg ${color} shadow-lg`}>
    <div className="flex items-center gap-3 mb-4">
      <Icon className="text-white" size={24} />
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <div className="space-y-3">{children}</div>
  </div>
);

const StepBox = ({ title, description }) => (
  <div className="bg-white/10 rounded-md p-3 text-white">
    <h4 className="font-medium mb-1">{title}</h4>
    <p className="text-sm text-white/80">{description}</p>
  </div>
);

const Arrow = () => (
  <div className="flex flex-col items-center justify-center gap-2">
    <ArrowRight className="text-gray-400" size={28} />
    <span className="text-sm text-gray-500">Merges Into</span>
  </div>
);

const Chart = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-8 bg-gray-50 rounded-xl">
      <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">
        Perfect Security Through Merged Lineages
      </h2>
      <p className="text-gray-600 text-center mb-8">
        How Tangle creates an unbreakable link with your original crypto
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-stretch justify-between space-y-6 md:space-y-0 md:space-x-6">
        <FlowBox title="Original Crypto" color="bg-blue-600" icon={Wallet}>
          <StepBox 
            title="Your Ethereum Address" 
            description="0x123...abc"
          />
          <StepBox 
            title="Current Balance" 
            description="Verified on-chain state"
          />
          <div className="flex items-center gap-2 mt-2">
            <TokenIcon symbol="eth" variant="mono" color="white" />
            <span className="text-white">Ethereum</span>
          </div>
        </FlowBox>

        <Arrow />

        <FlowBox title="Merged Lineage" color="bg-purple-600" icon={Lock}>
          <StepBox 
            title="Combined Identity" 
            description="ETH address + Tangle seed merged"
          />
          <StepBox 
            title="Unified State" 
            description="Both chains' states encoded together"
          />
          <StepBox 
            title="One Truth" 
            description="Inseparable mathematical connection"
          />
        </FlowBox>

        <Arrow />

        <FlowBox title="Tangle Security" color="bg-green-600" icon={ShieldCheck}>
          <StepBox 
            title="No Double-Spending" 
            description="Mathematically impossible to spend twice"
          />
          <StepBox 
            title="Instant Verification" 
            description="Every transaction checked against both chains"
          />
          <StepBox 
            title="Complete Independence" 
            description="No external systems needed"
          />
        </FlowBox>
      </div>

      <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Why It's Better
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <ShieldCheck className="text-green-600" size={16} />
                </div>
                <p className="text-gray-600">No need to lock up your crypto</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Lock className="text-blue-600" size={16} />
                </div>
                <p className="text-gray-600">Cannot spend the same money twice</p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <Wallet className="text-purple-600" size={16} />
                </div>
                <p className="text-gray-600">Works instantly, just like regular money</p>
              </li>
            </ul>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Why This Matters
            </h3>
            <p className="text-gray-600 text-sm">
              By combining your crypto identity with Tangle's speed, we create a 
              system that's both completely secure and lightning fast. Your crypto 
              stays yours, but now you can spend it anywhere, instantly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;