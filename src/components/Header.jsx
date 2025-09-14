import React from "react";
import Button from "./Button"; // ✅ Reusable Button component

const Header = () => {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Inline styles for animations */}
      <style>
        {`
          @keyframes fadeDown {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .fade-down { animation: fadeDown 1s ease-out forwards; }
          .fade-up { animation: fadeUp 1s ease-out forwards; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-500 { animation-delay: 0.5s; }
        `}
      </style>

      <div
        className="w-full min-h-[80vh] flex flex-col items-center justify-center text-center text-white px-4 bg-no-repeat bg-center bg-cover md:bg-contain"
        style={{
          backgroundImage:
            "url('https://www.apple.com/v/home/takeover/r/images/overview/hero/hero__x15fcac9fw2q_large.png')",
          backgroundSize: "710px auto",
        }}
      >
        {/* Main Heading with fadeDown */}
        <h1 className="text-5xl font-semibold mb-4 opacity-0 fade-down">
          Apple for the Future
        </h1>

        {/* Subheading with fadeUp + delay */}
        <h2 className="text-2xl font-normal mb-6 opacity-0 fade-up delay-300">
          Discover the next generation of iPhone, iPad, Mac, and more — all designed for what’s next.
        </h2>

        {/* Buttons row with fadeUp + longer delay */}
        <div className="flex gap-6 opacity-0 fade-up delay-500">
          <Button label="LEARN MORE" variant="dark" />
          <Button label="PRE-ORDER" variant="light" />
        </div>
      </div>
    </section>
  );
};

export default Header;
