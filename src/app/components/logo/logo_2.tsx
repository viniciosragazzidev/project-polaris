import PolarisSistemasLogo from "@/medias/polaris-sistemas.svg";
import Image from "next/image";
import React from "react";
interface Logo2Props {
  size?: "small" | "normal" | "medium" | "large";
}

const Logo2: React.FC<Logo2Props> = ({ size = "small" }) => {
  const sizeClasses = {
    small: 160, // Tamanho pequeno
    normal: 240, // Tamanho normal
    medium: 320, // Tamanho médio
    large: 480, // Tamanho grande
  };

  return (
    <div className={`max-sm:self-start  `}>
      <Image
        className="max-sm:self-start max-sm:w-[160px]"
        src={PolarisSistemasLogo}
        alt="Polaris Sistemas"
        width={sizeClasses[size]}
      />
    </div>
  );
};

export default Logo2;
