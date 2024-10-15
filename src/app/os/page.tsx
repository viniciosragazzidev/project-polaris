"use client";

import optionAudio from "@/medias/options.mp3";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useRef, useState } from "react";
import Logo2 from "../components/logo/logo_2";
import { play } from "../components/sound/play";
import { GlobalContext } from "../contexts/GlobalContext";
import ItemsMenu from "./items-menu";
import ItemsMenuNavigationBar from "./items-menu-navigation-bar";
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
  const playSound = () => {
    if (globalSound) {
      play({ item: optionAudio });
    }
  };

  const keyPressedFunc = (event: KeyboardEvent) => {
    if (event.key === "q") {
      if (currentMenuItem > 0) {
        changeMenuItem(currentMenuItem - 1);
        setCurrentKey("q");
        playSound();
      }
    } else if (event.key === "c") {
      if (currentMenuItem < items_menu_navigation.length - 1) {
        changeMenuItem(currentMenuItem + 1);
        setCurrentKey("c");
        playSound();
      }
    }

    if (event.key === "Escape") {
      backToPreviousPage();
    }
  };

  const adjustMenuItemByResizeScreen = () => {
    changeMenuItem(currentMenuItem);
  };
  const router = useRouter();

  const backToPreviousPage = () => {
    router.back();
  };

  useEffect(() => {
    document.addEventListener("keydown", keyPressedFunc);

    window.addEventListener("resize", adjustMenuItemByResizeScreen);
    return () => {
      document.removeEventListener("keydown", keyPressedFunc);

      window.removeEventListener("resize", adjustMenuItemByResizeScreen);
      if (currentKey === "q" || currentKey === "c") {
        setTimeout(() => {
          setCurrentKey("");
        }, 200);
      }
    };
  }, [currentMenuItem]);

  return (
    <main className="w-full h-full min-h-screen border-t-4 border-primary flex justify-center flex-col pt-6">
      <div className="max-md:px-5 md:container w-full h-full flex flex-col gap-10 w">
        <div className="fade-in delay-1">
          <Logo2 size="normal" />
        </div>
        <div className="menu w-full h-[65vh] md:max-w-[600px] overflow-hidden flex flex-col gap-6">
          <ItemsMenuNavigationBar
            items_menu_navigation={items_menu_navigation}
            currentKey={currentKey}
            currentMenuItem={currentMenuItem}
            changeMenuItem={changeMenuItem}
            playSound={playSound}
          />
          <ItemsMenu currentMenuItem={currentMenuItem} itemsMenu={itemsMenu} />
        </div>
      </div>

      <div className="bar-footer p-4 flex justify-end pr-20">
        <div className="back flex items-center gap-3">
          <span className="bg-white p-1  text-xs font-semibold rounded-lg ">
            Esc
          </span>

          <span className="text-white font-bold">Voltar</span>
        </div>
      </div>
    </main>
  );
};

export default OS;
