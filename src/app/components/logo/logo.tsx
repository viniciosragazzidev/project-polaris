import React from "react";
import Image from "next/image";
import logo_simple from "@/medias/logo_simple.png";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

interface LogoProps {
  size?: "small" | "medium" | "large" | "simple";
}

const Logo: React.FC<LogoProps> = ({ size = "medium" }) => {
  const sizeClasses = {
    small: "text-logoSmall",
    medium: "text-logoMedium",
    large: "text-logoLarge",
  };

  const imageSizes = {
    small: 24,
    medium: 48,
    large: 72,
    simple: 24, // Mesma largura do small
  };

  return (
    <div className="flex justify-center flex-col items-center gap-2">
      <div className="fade-in">
        <Image
          src={logo_simple}
          width={imageSizes[size]}
          height={imageSizes[size]}
          alt="Polaris Logo"
          loading="lazy"
        />
      </div>
      {size !== "simple" && (
        <h1
          className={`fade-in delay-1 font-bold text-white uppercase tracking-widest ${inter.className} ${sizeClasses[size]}`}
        >
          Polaris
        </h1>
      )}
    </div>
  );
};

export default Logo;
