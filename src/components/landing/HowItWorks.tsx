import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect & Stake",
      description: "Connect your wallet and stake your $PHR tokens through the YieldLoop protocol interface.",
      color: "bg-blue-500"
    },
    {
      number: "02",
      title: "Mint yPHR",
      description: "Receive liquid yPHR tokens representing your staked position, maintaining full DeFi composability.",
      color: "bg-purple-500"
    },
    {
      number: "03",
      title: "Restake to SPNs",
      description: "Automatically restake through Pharos validators into Special Processing Networks for enhanced yields.",
      color: "bg-blue-600"
    },
    {
      number: "04",
      title: "Earn & Leverage",
      description: "Track rewards via rPHR ledger while using yPHR in DeFi protocols for additional yield opportunities.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="bg-gray-100 py-16 lg:px-20 px-6 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Background image with text overlay */}
          <div className="relative lg:h-[1150px] h-max py-6 ">
            <div className="bg-[url('/how-it-works.png')] lg:w-[80vw] lg:h-[1000px] w-[70vw] h-full bg-no-repeat bg-cover absolute lg:left-[-100%] opacity-20"></div>
            <div className="sticky top-0 inset-0 flex flex-col justify-center pl-0 lg:pl-12">
              <h2 className="text-2xl lg:text-5xl font-bold text-gray-800 lg:mb-4 mb-2 text-[#C4C4C4] lg:text-left text-center">
                How Liquid Restaking Works
              </h2>
              <p className="text-lg lg:max-w-md px-2 lg:px-0 lg:text-left text-center text-[#1C1C1C]">
                Experience seamless liquid restaking in four simple steps. No complex processes, no lengthy wait times - just efficient capital deployment.
              </p>
            </div>
          </div>

          {/* Right side - Step cards */}
          <div className="flex flex-col gap-6 lg:items-end items-center justify-center">
            {steps.map((step, index) => (
              <Card key={index} className="bg-white border-[#69696966] border-[1px]">
                <CardContent>
                  <div className="flex items-center gap-4 flex-col justify-center ">
                    <div className={`${step.color} text-white w-12 h-12 rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                      {step.number}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-center">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
