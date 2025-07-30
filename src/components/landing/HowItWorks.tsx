import { Card, CardContent } from "@/components/ui/Card";
import Image from "next/image";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Connect & Stake",
      description:
        "Connect your wallet and stake your $PHRS tokens through the YieldLoop protocol interface.",
      color: "bg-blue-500",
    },
    {
      number: "02",
      title: "Mint yPHR",
      description:
        "Receive liquid yPHR tokens representing your staked position, maintaining full DeFi composability.",
      color: "bg-purple-500",
    },
    {
      number: "03",
      title: "Restake to SPNs",
      description:
        "Automatically restake through Pharos validators into Special Processing Networks for enhanced yields.",
      color: "bg-blue-600",
    },
    {
      number: "04",
      title: "Earn & Leverage",
      description:
        "Track rewards via rPHR ledger while using yPHR in DeFi protocols for additional yield opportunities.",
      color: "bg-purple-500",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 lg:px-20 px-6 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Background image with text overlay */}
          <div className="relative lg:h-[1150px] h-max py-6 ">
            <div className="bg-[url('/how-it-works.png')] lg:w-[120vw] lg:h-[1400px] w-[90vw] h-full bg-no-repeat bg-cover absolute lg:left-[-100%] opacity-20 hidden lg:block"></div>
            <div className="sticky top-0 inset-0 flex flex-col justify-center pl-0 lg:pl-12 lg:-mt-8 -mt-4">
              <h2
                className="text-3xl lg:text-6xl font-bold lg:mb-2 mb-1 lg:text-left text-center font-[Gotham] lg:ml-8"
                style={{ color: "#1C1C1C" }}
              >
                How Liquid Restaking Works
              </h2>
              <p
                className="text-xl lg:max-w-md px-2 lg:px-0 lg:text-left text-center lg:ml-8 font-[Gotham]"
                style={{ color: "#1C1C1C80" }}
              >
                Experience seamless liquid restaking in four simple steps. No
                complex processes, no lengthy wait times - just efficient
                capital deployment.
              </p>
            </div>
          </div>

          {/* Right side - Step cards */}
          <div className="flex flex-col gap-5 lg:items-end items-center justify-center">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="bg-white border-[#69696966] border-[1px] w-[356px] h-[298px] rounded-[20px] p-[30px]"
              >
                <CardContent className="p-0 h-full">
                  <div className="flex items-center gap-4 flex-col justify-center ">
                    <div
                      className="text-white w-[60px] h-[60px] rounded-lg flex items-center justify-center font-bold text-xl flex-shrink-0 font-[Gotham]"
                      style={
                        index === 0 ? { 
                          background: '#00D2FF',
                          boxShadow: '0px 4px 4px 0px #00000040'
                        } : index === 1 ? {
                          background: '#7C3AED',
                          boxShadow: '0px 4px 4px 0px #00000040'
                        } : index === 2 ? {
                          background: '#00D2FF',
                          boxShadow: '0px 4px 4px 0px #00000040'
                        } : {
                          background: '#7C3AED',
                          boxShadow: '0px 4px 4px 0px #00000040'
                        }
                      }
                    >
                      {step.number}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <h3
                        className="text-2xl font-bold mb-2 font-[Gotham]"
                        style={{ color: "#1C1C1C" }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-lg leading-relaxed text-center font-[Gotham]"
                        style={{ color: "#1C1C1C80" }}
                      >
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
