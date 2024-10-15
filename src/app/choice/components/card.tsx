import { Lock } from "lucide-react";
import { Fira_Sans_Condensed } from "next/font/google";
import Image from "next/image";
import React, { useContext } from "react";
const FiraSansCondensed = Fira_Sans_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface CardProps {
  title: string;
  image: string;
  icon: JSX.Element; // Remove the ? and use JSX.Element instead of React.ReactNode
  href: string;
  delay?: number;
  active?: boolean;
  className?: string;
}

import { play } from "@/app/components/sound/play";
import { GlobalContext } from "@/app/contexts/GlobalContext";
import { cn } from "@/lib/utils";
import tick from "@/medias/tick.mp3";
import Link from "next/link";
const Card = ({
  title,
  image,
  icon,
  delay,
  active,
  href,
  className,
}: CardProps) => {
  const IconComponent = React.cloneElement(icon, {
    className: "text-white text-[30px]",
  });
  const { globalSound } = useContext(GlobalContext);

  const playAudio = () => {
    if (active && globalSound) {
      play({ item: tick });
    }
  };
  return (
    <Link
      href={href}
      className={cn(
        `${className} w-full h-full min-h-[200px] grid overflow-hidden transition-all rounded-sm  max-sm:rounded-b-none  ${
          active && " "
        }`
      )}
    >
      <div
        onMouseEnter={playAudio}
        className={`card fade-in ${
          delay ? `delay-${delay}` : ""
        } w-full h-full rounded-sm  relative flex flex-col justify-end   group ${
          active
            ? "cursor-pointer hover:border  hover:border-b-0  hover:border-primary max-sm:border-b max-sm:border-primary"
            : "cursor-not-allowed"
        }`}
      >
        {!active && (
          <div className="w-full h-full absolute top-0 left-0 backdrop-blur-sm bg-black/70 z-[49] flex justify-center items-center">
            <Lock size={44} className="text-primary" />
          </div>
        )}
        <div
          className={`w-full h-full absolute top-0 left-0 group-hover:scale-105 transition-transform ${
            !active ? "opacity-10" : "opacity-60"
          }`}
        >
          <Image
            src={image}
            alt="ceu"
            className="w-full h-full object-cover"
            layout="fill"
          />
        </div>
        <div className="flex flex-col group-hover:border-b   group-hover:border-b-primary rounded-b max-md:border-b max-md:border-b-primary justify-end pb-5  max-sm:pt-5 items-center w-full h-min min-h-[198px] z-40 gap-3 bgGradienteCard ">
          <span className="fade-in delay-3 group-hover:scale-[1.1] transition-transform">
            {IconComponent}
          </span>
          <h1
            className={`text-white text-2xl max-md:text-xl group-hover:scale-[1.1] transition-transform uppercase font-bold fade-in delay-3  ${FiraSansCondensed.className}`}
          >
            {title}
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Card;
