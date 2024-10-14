"use client";

import ceu from "@/medias/ceu.jpg";
import optionAudio from "@/medias/options.mp3";
import { Sparkle } from "lucide-react";
import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import Logo2 from "../components/logo/logo_2";
import { play } from "../components/sound/play";
import { GlobalContext } from "../contexts/GlobalContext";
const OS = () => {
  const { globalSound } = useContext(GlobalContext);
  const [currentMenuItem, setCurrentMenuItem] = useState(0);
  const items_menu_navigation = [
    { id: 1, name: "inicio" },
    { id: 2, name: "servicos" },
    { id: 3, name: "clientes" },
    { id: 4, name: "ajustes" },
  ];
  const [currentKey, setCurrentKey] = useState("");
  const itemsMenu = useRef<HTMLDivElement>(null);

  const changeMenuItem = (index: number) => {
    setCurrentMenuItem(index);

    if (globalSound) {
      play({ item: optionAudio });
    }

    // Calcular o translate
    const selectedElement = itemsMenu.current?.children[index] as HTMLElement;
    if (selectedElement && itemsMenu.current) {
      const translateX = selectedElement.offsetLeft;
      const translateY = selectedElement.offsetTop;
      itemsMenu.current.style.setProperty(
        "transform",
        `translate(-${translateX}px, -${translateY}px)`
      );
    }
  };

  const changeCurrentMenuItemByKeyPressed = (event: KeyboardEvent) => {
    if (event.key === "q") {
      if (currentMenuItem > 0) {
        changeMenuItem(currentMenuItem - 1);
        setCurrentKey("q");
      }
    } else if (event.key === "c") {
      if (currentMenuItem < items_menu_navigation.length - 1) {
        changeMenuItem(currentMenuItem + 1);
        setCurrentKey("c");
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", changeCurrentMenuItemByKeyPressed);
    return () => {
      document.removeEventListener(
        "keydown",
        changeCurrentMenuItemByKeyPressed
      );
      if (currentKey === "q" || currentKey === "c") {
        setTimeout(() => {
          setCurrentKey("");
        }, 200);
      }
    };
  }, [currentMenuItem]);

  return (
    <main className="w-full h-full min-h-screen border-t-4 border-primary flex justify-center pt-6">
      <div className="max-md:px-5 md:container w-full h-full flex flex-col gap-10 w">
        <Logo2 size="normal" />
        <div className="menu w-full h-[65vh] md:max-w-[600px] overflow-hidden flex flex-col gap-6">
          <div className="flex gap-4">
            <ul className="flex gap-4 max-sm:gap-1 items-center text-sm max-sm:text-xs">
              <li
                className={`cursor-pointer max-sm:hidden  transition-all  sm:mr-5  px-2 py-1 font-bold bg-white rounded-sm uppercase tracking-wider ${
                  currentKey === "q" ? "scale-95 opacity-55" : ""
                }`}
              >
                Q
              </li>
              {items_menu_navigation.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => changeMenuItem(index)}
                  className={`cursor-pointer  px-3 ${
                    currentMenuItem === index
                      ? "bg-card font-semibold"
                      : "hover:bg-card/40 hover:text-white/100 text-white/60"
                  } rounded-md text-white  py-1.5 uppercase tracking-wider`}
                >
                  {item.name}
                </li>
              ))}
              <li
                className={`cursor-pointer max-sm:hidden  transition-all sm:ml-5 px-2 py-1 font-bold bg-white rounded-sm uppercase tracking-wider ${
                  currentKey === "c" ? "scale-95 opacity-55" : ""
                }`}
              >
                C
              </li>
            </ul>
          </div>
          <div
            ref={itemsMenu}
            className="relative menuSlide flex min-w-min  h-screen overflow-hidden"
          >
            <div
              className={`grid grid-cols-1 md:grid-cols-2 grid-rows-2 max-sm:grid-rows-3  h-full gap-4 slide w-screen sm:min-w-[600px] sm:max-w-[600px] ${
                currentMenuItem === 0 ? "fade-in" : "fade-out"
              } `}
            >
              <div className="w-full h-full bg-main relative rounded-md border-b  flex flex-col justify-end border-primary row-span-2 max-sm:row-span-1 ">
                <div className="w-full h-full absolute top-0 left-0 opacity-10">
                  <Image
                    src={ceu}
                    alt="ceu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-min p-5  bgGradienteCard  text-white self-end z-50">
                  <h1 className="text-3xl max-sm:text-xl font-bold flex items-center gap-2">
                    <Sparkle className="text-primary" />
                    Nova <span className="text-primary">OS</span>
                  </h1>
                </div>
              </div>
              <div className="w-full h-full bg-card rounded-md"></div>
              <div className="w-full h-full bg-card rounded-md"></div>
            </div>
            <div
              className={`grid grid-cols-1 md:grid-cols-2 grid-rows-2 max-sm:grid-rows-3  h-full gap-4 slide w-screen sm:min-w-[600px] sm:max-w-[600px] ${
                currentMenuItem === 1 ? "fade-in" : "fade-out"
              } `}
            >
              <div className="w-full h-full bg-main relative rounded-md border-b  flex flex-col justify-end border-primary row-span-2 max-sm:row-span-1 ">
                <div className="w-full h-full absolute top-0 left-0 opacity-10">
                  <Image
                    src={ceu}
                    alt="ceu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-min p-5  bgGradienteCard  text-white self-end z-50">
                  <h1 className="text-3xl max-sm:text-xl font-bold flex items-center gap-2">
                    <Sparkle className="text-primary" />
                    Nova <span className="text-primary">OS</span>
                  </h1>
                </div>
              </div>

              <div className="w-full h-full bg-main relative rounded-md border-b  flex flex-col justify-end border-primary row-span-2 max-sm:row-span-1 ">
                <div className="w-full h-full absolute top-0 left-0 opacity-10">
                  <Image
                    src={ceu}
                    alt="ceu"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-min p-5  bgGradienteCard  text-white self-end z-50">
                  <h1 className="text-3xl max-sm:text-xl font-bold flex items-center gap-2">
                    <Sparkle className="text-primary" />
                    Nova <span className="text-primary">OS</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OS;
