import React from "react";

function Button({ label, variant = "dark" }) {
  const baseStyles =
    "px-4 py-2 rounded-md font-medium border transition-colors duration-200";

  const variants = {
    dark: "bg-white text-black border-white hover:bg-gray-200",
    light: "bg-black text-white border-black hover:bg-gray-800",
  };

  return <button className={`${baseStyles} ${variants[variant]}`}>{label}</button>;
}

export default Button;