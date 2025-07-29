import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-white relative overflow-hidden font-sans"
      style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
    >
      {/* Main blue gradient background blob */}
      <div
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/3 w-[1400px] h-[1000px]"
        style={{
          backgroundImage: "url(/shield.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      ></div>

      {/* Floating golden oval shapes */}
      <img
        src="/Group 6.png"
        alt=""
        className="absolute opacity-100"
        style={{
          width: "100vw",
          height: "100vh",
          top: "0",
          left: "0",
          transform: "rotate(0deg)",
          filter: "blur(1px)",
          zIndex: 25,
          objectFit: "cover",
        }}
      />

      {/* Navigation */}
      <nav
        className="relative z-20 bg-white"
        style={{
          position: "relative",
          zIndex: 20,
          backgroundColor: "white",
          width: "100%",
          borderBottom: "none",
          outline: "none",
        }}
      >
        <div
          className="flex items-center justify-between px-6 lg:px-16 py-4 max-w-7xl mx-auto"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1.5rem",
            maxWidth: "80rem",
            margin: "0 auto",
            border: "none",
            outline: "none",
          }}
        >
          {/* Brand */}
          <div className="flex flex-col">
            <div
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(92deg, #00D2FF 1.69%, #7C3AED 101.93%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily: "Gotham",
                fontWeight: 350,
                fontSize: "28px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              YieldLoop
            </div>
            <div
              className="text-[14px] uppercase tracking-[0.15em] font-medium"
              style={{
                color: "#1C1C1C80",
              }}
            >
              DEFI PROTOCOL
            </div>
          </div>

          {/* Navigation Links */}
          <div
            className="flex items-center space-x-8"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              border: "none",
              outline: "none",
            }}
          >
            <a
              href="#features"
              className="hover:text-gray-900 transition-colors duration-200"
              style={{
                fontFamily: "Gotham",
                fontWeight: 325,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#1C1C1C",
                textDecoration: "none",
                border: "none",
                outline: "none",
                display: "inline-block",
              }}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="hover:text-gray-900 transition-colors duration-200"
              style={{
                fontFamily: "Gotham",
                fontWeight: 325,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#1C1C1C",
                textDecoration: "none",
                border: "none",
                outline: "none",
                display: "inline-block",
              }}
            >
              How it works
            </a>
            <a
              href="#tokenomics"
              className="hover:text-gray-900 transition-colors duration-200"
              style={{
                fontFamily: "Gotham",
                fontWeight: 325,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#1C1C1C",
                textDecoration: "none",
                border: "none",
                outline: "none",
                display: "inline-block",
              }}
            >
              Tokenomics
            </a>
            <a
              href="#docs"
              className="hover:text-gray-900 transition-colors duration-200"
              style={{
                fontFamily: "Gotham",
                fontWeight: 325,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "#1C1C1C",
                textDecoration: "none",
                border: "none",
                outline: "none",
                display: "inline-block",
              }}
            >
              Docs
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <button
              className="hover:shadow-lg transition-all duration-200"
              style={{
                width: "140px",
                height: "47px",
                borderRadius: "10px",
                paddingTop: "10px",
                paddingRight: "15px",
                paddingBottom: "10px",
                paddingLeft: "15px",
                background:
                  "linear-gradient(99.92deg, rgba(0, 210, 255, 0.95) 5.17%, rgba(124, 58, 237, 0.95) 100.44%)",
                fontFamily: "Gotham",
                fontWeight: 700,
                fontSize: "18px",
                lineHeight: "100%",
                letterSpacing: "0%",
                textAlign: "center",
                color: "white",
                opacity: 1,
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Join waitlist
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <main
        className="relative z-20 flex flex-col items-center justify-center text-center px-8 pt-32 pb-32 max-w-7xl mx-auto"
        style={{ marginTop: "40px" }}
      >
        {/* Main Heading */}
        <h1
          className="mb-8"
          style={{
            fontFamily:
              "Gotham, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            fontWeight: 700,
            fontSize: "80px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          <div
            className="text-gray-900 mb-6"
            style={{
              fontFamily:
                "Gotham, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontWeight: 700,
              fontSize: "80px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            Redefine Capital Efficiency
          </div>
          <div
            className="text-gray-900"
            style={{
              fontFamily:
                "Gotham, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
              fontWeight: 700,
              fontSize: "80px",
              lineHeight: "100%",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            with{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                background:
                  "linear-gradient(to right, #3ecbff, #3b82f6, #6c4cff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontFamily:
                  "Gotham, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                fontWeight: 700,
                fontSize: "80px",
                lineHeight: "100%",
                letterSpacing: "0%",
              }}
            >
              Liquid Restaking
            </span>
          </div>
        </h1>

        {/* Subtitle */}
        <p
          className="max-w-4xl mx-auto mb-16"
          style={{
            color: "#1C1C1C80",
            fontFamily: "Gotham",
            fontWeight: 325,
            fontSize: "25px",
            lineHeight: "100%",
            letterSpacing: "0%",
            textAlign: "center",
          }}
        >
          Stake $PHRS, mint liquid tokens, and unlock seamless DeFi
          opportunities on
          <br />
          Pharos without lockups or bridge dependencies
        </p>

        {/* Action Buttons */}
        <div className="flex items-center" style={{ gap: "10px" }}>
          <button
            className="hover:shadow-xl transition-all duration-300 flex items-center justify-center font-semibold"
            style={{
              width: "179px",
              height: "47px",
              borderRadius: "10px",
              paddingTop: "10px",
              paddingRight: "15px",
              paddingBottom: "10px",
              paddingLeft: "10px",
              background: "linear-gradient(to right, #3ecbff, #6c4cff)",
              opacity: 1,
              fontSize: "16px",
              fontWeight: "600",
              border: "none",
              gap: "8px",
              color: "#F5F5F5",
            }}
          >
            <span>Join waitlist</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ width: "20px", height: "20px" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>

          <button
            className="border border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 font-semibold flex items-center justify-center"
            style={{
              width: "179px",
              height: "47px",
              borderRadius: "10px",
              paddingTop: "10px",
              paddingRight: "15px",
              paddingBottom: "10px",
              paddingLeft: "10px",
              opacity: 1,
              fontSize: "16px",
              fontWeight: "600",
              borderColor: "#d1d5db",
              color: "#374151",
            }}
          >
            Explore protocol
          </button>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
