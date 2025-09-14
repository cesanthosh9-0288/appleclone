import React from "react";
import Button from "./Button";

function Section() {
  const products = {
    product1: {
      title: "iPhone 17",
      subtitle: "A new era of performance.",
      image:
        "https://images.macrumors.com/t/n3CZfEM9hRbHXX6aYymLtlNGvzQ=/1600x900/smart/article-new/2025/09/iphone-17-ceramic-shield.jpg",
      bg: "bg-black text-white",
      links: ["Learn More", "Pre-Order"],
    },
    product2: {
      title: "Apple Watch Series 10",
      subtitle: "Smarter. Brighter. Stronger.",
      image:
        "https://www.apple.com/newsroom/images/2024/09/introducing-apple-watch-series-10/article/Apple-Watch-Series-10-lineup-240909_big.jpg.large.jpg",
      bg: "bg-white text-black",
      links: ["Learn More", "Pre-Order"],
    },
    product3: {
      title: "AirPods Pro 3",
      subtitle: "The world's best in-ear active Noise Cancellation",
      image:
        "https://www.apple.com/v/airpods-pro/o/images/overview/welcome/hero__b0eal3mn03ua_large.jpg",
      bg: "bg-white text-black",
      links: ["Learn More", "Pre-Order"],
    },
    product4: {
      title: "Apple Watch Series 11",
      subtitle: "The ultimate watch for a healthy life",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/s11-case-unselect-gallery-1-202509_GEO_SG_FMT_WHH?wid=752&hei=720&fmt=p-jpg&qlt=80&.v=WldDSmZlQ1ladGVha0lMWUJJK2M4ZHlVRllKam5abHNZRGludXlMbytKNll4WlJ0MUZFY2pnNWpBWDFIaUtnUXdNcFdFNWZtdVQ0djE1UTRwRU5lcXlaSE1Qa0haZTFvMWVJTkxjaWwxSnlpeUlldENlcWUwU1RFbkFmYitxUFRtcHVYS0ZTV1hjWldoZ1kvcDUzYllB",
      bg: "bg-white text-black",
      links: ["Learn More", "Pre-Order"],
    },
    product5: {
      title: "Apple Watch SE 3",
      subtitle: "Walk it. Talk it. Track it. Love it.",
      image:
        "https://cdn.mos.cms.futurecdn.net/PVd87ty5TewQaX46K3KRxi-1200-80.jpg",
      bg: "bg-black text-white",
      links: ["Learn More", "Pre-Order"],
    },
    product6: {
      title: "Apple Watch Ultra 3",
      subtitle: "Personal beast",
      image:
        "https://www.apple.com/newsroom/images/2025/09/introducing-apple-watch-ultra-3/tile/Apple-Watch-Ultra-3-hero-250909-lp.jpg.og.jpg",
      bg: "bg-black text-white",
      links: ["Learn More", "Pre-Order"],
    },
  };

  const ProductCard = ({ product, isDouble }) => {
    const isWhiteBg = product.bg.includes("bg-white");

    return (
      <div
        className={`flex-1 flex flex-col items-center justify-center text-center px-6 py-12 m-2 rounded-lg fade-in ${product.bg}`}
      >
        <h1 className="text-4xl font-semibold mb-2">{product.title}</h1>
        <h2 className="text-xl font-normal mb-6">{product.subtitle}</h2>
        <img
          src={product.image}
          alt={product.title}
          className={`mx-auto object-contain mb-6 ${
            isDouble ? "w-full h-64 md:h-72" : "w-full sm:w-3/4 md:max-w-5xl"
          }`}
        />
        <div className="flex gap-6">
          <Button
            label={product.links[0]}
            variant={isWhiteBg ? "light" : "dark"}
          />
          <Button
            label={product.links[1]}
            variant={isWhiteBg ? "light" : "dark"}
          />
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Local animation styles */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .fade-in {
            animation: fadeIn 1s ease-in forwards;
          }
        `}
      </style>

      {/* Full-width sections */}
      <ProductCard product={products.product1} isDouble={false} />
      <ProductCard product={products.product2} isDouble={false} />

      {/* Row: AirPods Pro 3 + Apple Watch Series 11 */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1">
          <ProductCard product={products.product3} isDouble={true} />
        </div>
        <div className="flex-1">
          <ProductCard product={products.product4} isDouble={true} />
        </div>
      </div>

      {/* Row: Apple Watch SE 3 + Apple Watch Ultra 3 */}
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1">
          <ProductCard product={products.product5} isDouble={true} />
        </div>
        <div className="flex-1">
          <ProductCard product={products.product6} isDouble={true} />
        </div>
      </div>
    </>
  );
}

export default Section;
