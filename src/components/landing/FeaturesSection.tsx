import React from "react";
import Image from "next/image";
import {
  Shield,
  Zap,
  TrendingUp,
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <>
      {/* First Section - Three Features with Background */}
      <section
        className="relative hidden lg:block"
        style={{
          width: "3000px",
          height: "222.5px",
          left: "50%",
          transform: "translateX(-50%)",
          marginTop: "100px",
          opacity: 1,
          marginBottom: "80px",
          backgroundImage: "url('/Group 5.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-6">
          {/* Features Grid */}
          <div
            className="relative max-w-6xl mx-auto"
            style={{ minHeight: "300px" }}
          >
            {/* Secure Feature */}
            <div
              className="text-center absolute"
              style={{
                width: "224px",
                height: "183px",
                top: "87px",
                left: "20px",
                opacity: 1,
                gap: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="flex justify-center mb-3">
                <div
                  className="rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    width: "95px",
                    height: "95px",
                    paddingTop: "21px",
                    paddingRight: "22px",
                    paddingBottom: "21px",
                    paddingLeft: "22px",
                    background: "#00D2FF1A",
                  }}
                >
                  <Shield 
                    className="w-12 h-12" 
                    style={{ color: "#00D2FF" }}
                  />
                </div>
              </div>
              <h3
                className="text-2xl font-bold mb-1"
                style={{
                  background:
                    "linear-gradient(92deg, #00D2FF 1.69%, #7C3AED 101.93%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginTop: "-20px",
                  marginLeft: "20px",
                }}
              >
                Secure
              </h3>
              <p
                className="max-w-xs mx-auto"
                style={{
                  fontFamily: "Gotham, sans-serif",
                  fontWeight: 325,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#1C1C1C80",
                  marginLeft: "20px",
                  marginTop: "-15px",
                }}
              >
                Native Pharos validation with transparent tracking
              </p>
            </div>

            {/* Liquid Feature - Center */}
            <div
              className="text-center absolute"
              style={{
                width: "224px",
                height: "183px",
                top: "-60px",
                left: "50%",
                transform: "translateX(-50%)",
                opacity: 1,
                gap: "8px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="flex justify-center mb-1" style={{ marginTop: "20px" }}>
                <div
                  className="rounded-2xl flex items-center justify-center shadow-lg relative"
                  style={{
                    width: "95px",
                    height: "95px",
                    paddingTop: "21px",
                    paddingRight: "22px",
                    paddingBottom: "21px",
                    paddingLeft: "22px",
                    background: "#7C3AED33",
                  }}
                >
                  <Zap
                    className="text-purple-600"
                    style={{
                      width: "32.14285659790039px",
                      height: "46.42856979370117px",
                      borderRadius: "4px",
                      opacity: 1,
                    }}
                  />
                </div>
              </div>
              <h3
                className="text-2xl font-bold mb-1"
                style={{
                  background:
                    "linear-gradient(92deg, #00D2FF 1.69%, #7C3AED 101.93%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Liquid
              </h3>
              <p
                className="max-w-xs mx-auto"
                style={{
                  fontFamily: "Gotham, sans-serif",
                  fontWeight: 325,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#1C1C1C80",
                }}
              >
                No lockups, maintain DeFi composability
              </p>
            </div>

            {/* High Yield Feature */}
            <div
              className="text-center absolute"
              style={{
                width: "224px",
                height: "183px",
                top: "87px",
                right: "20px",
                opacity: 1,
                gap: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="flex justify-center mb-3">
                <div
                  className="rounded-2xl flex items-center justify-center"
                  style={{
                    width: "95px",
                    height: "95px",
                    paddingTop: "21px",
                    paddingRight: "22px",
                    paddingBottom: "21px",
                    paddingLeft: "22px",
                    background: "#00FF2212",
                    boxShadow: "0px 4px 4px 0px #00000040",
                  }}
                >
                  <TrendingUp 
                    className="w-12 h-12" 
                    style={{ color: "#00FF22" }}
                  />
                </div>
              </div>
              <h3
                className="text-2xl font-bold mb-1"
                style={{
                  background:
                    "linear-gradient(92deg, #00D2FF 1.69%, #7C3AED 101.93%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  marginTop: "-20px",
                  marginLeft: "20px",
                }}
              >
                High Yield
              </h3>
              <p
                className="max-w-xs mx-auto"
                style={{
                  fontFamily: "Gotham, sans-serif",
                  fontWeight: 325,
                  fontSize: "18px",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                  textAlign: "center",
                  color: "#1C1C1C80",
                  marginLeft: "20px",
                  marginTop: "-15px",
                }}
              >
                Maximize returns through SPN restaking
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:hidden">
        <div className="container mx-auto px-4 sm:px-6">
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
            
            {/* Secure Feature */}
            <div className="text-center flex flex-col items-center space-y-4 md:space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg bg-[#00D2FF1A]">
                  <Shield 
                    className="w-8 h-8 md:w-10 md:h-10" 
                    style={{ color: "#00D2FF" }}
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#00D2FF] to-[#7C3AED] bg-clip-text text-transparent">
                Secure
              </h3>
              <p className="text-sm md:text-base text-gray-600 max-w-xs mx-auto leading-relaxed text-center">
                Native Pharos validation with transparent tracking
              </p>
            </div>

            {/* Liquid Feature - Center */}
            <div className="text-center flex flex-col items-center space-y-4 md:space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg bg-[#7C3AED33]">
                  <Zap className="w-8 h-8 md:w-10 md:h-10 text-purple-600" />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#00D2FF] to-[#7C3AED] bg-clip-text text-transparent">
                Liquid
              </h3>
              <p className="text-sm md:text-base text-gray-600 max-w-xs mx-auto leading-relaxed text-center">
                No lockups, maintain DeFi composability
              </p>
            </div>

            {/* High Yield Feature */}
            <div className="text-center flex flex-col items-center space-y-4 md:space-y-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center shadow-lg bg-[#00FF2212]">
                  <TrendingUp 
                    className="w-8 h-8 md:w-10 md:h-10" 
                    style={{ color: "#00FF22" }}
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-[#00D2FF] to-[#7C3AED] bg-clip-text text-transparent">
                High Yield
              </h3>
              <p className="text-sm md:text-base text-gray-600 max-w-xs mx-auto leading-relaxed text-center">
                Maximize returns through SPN restaking
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section - Header and 6-Card Grid */}
      <section className="py-12 md:py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16 lg:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              Unlock the Power of{" "}
              <span className="bg-gradient-to-r from-[#00D2FF] to-[#7C3AED] bg-clip-text text-transparent">
                Liquid Restaking
              </span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl max-w-4xl mx-auto leading-relaxed text-gray-600 px-4">
              YieldLoop transforms traditional staking by providing liquidity,
              composability, and enhanced yield opportunity on the Pharos
              blockchain.
            </p>
          </div>

          {/* 6-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
            
            {/* Liquid Staking */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl mb-4 md:mb-6 overflow-hidden">
                <Image 
                  src="/liquis staking.png" 
                  alt="Liquid Staking" 
                  width={64} 
                  height={64} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Liquid Staking
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Stake $PHRS and receive yPHR liquid tokens that maintain DeFi
                composability while earning staking rewards.
              </p>
            </div>

            {/* SPN Restaking */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl mb-4 md:mb-6 overflow-hidden">
                <Image 
                  src="/restaking.png" 
                  alt="Restaking" 
                  width={64} 
                  height={64} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Restaking
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Leverage existing Pharos validators to restake into Special
                Processing Networks for enhanced yield generation.
              </p>
            </div>

            {/* No Liquidity Lockups */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl mb-4 md:mb-6 overflow-hidden">
                <Image 
                  src="/liquidity.png" 
                  alt="No Liquidity Lockups" 
                  width={64} 
                  height={64} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                No Liquidity Lockups
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Trade, lend, or use yPHR in DeFi protocols immediately without
                waiting for unbonding periods.
              </p>
            </div>

            {/* Transparent Rewards */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl mb-4 md:mb-6 overflow-hidden">
                <Image 
                  src="/transparent reward.png" 
                  alt="Transparent Rewards" 
                  width={64} 
                  height={64} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Transparent Rewards
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Track all rewards through our internal rPHR ledger system with
                complete transparency and real-time updates.
              </p>
            </div>

            {/* Native Security */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl mb-4 md:mb-6 overflow-hidden">
                <Image 
                  src="/security.png" 
                  alt="Native Security" 
                  width={64} 
                  height={64} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Native Security
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Built natively on Pharos with no bridge dependencies, ensuring
                maximum security and decentralization.
              </p>
            </div>

            {/* Ecosystem Growth */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl mb-4 md:mb-6 overflow-hidden">
                <Image 
                  src="/growth.png" 
                  alt="Ecosystem Growth" 
                  width={64} 
                  height={64} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 leading-tight">
                Ecosystem Growth
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Participate in Pharos ecosystem expansion while contributing to
                network security and earning rewards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
