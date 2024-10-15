"use client";

import optionAudio from "@/medias/options.mp3";
import { ChartSpline, Plus, Search, User } from "lucide-react";
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

  const changeCurrentMenuItemByKeyPressed = (event: KeyboardEvent) => {
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
  };

  const adjustMenuItemByResizeScreen = () => {
    changeMenuItem(currentMenuItem);
  };

  useEffect(() => {
    document.addEventListener("keydown", changeCurrentMenuItemByKeyPressed);

    window.addEventListener("resize", adjustMenuItemByResizeScreen);
    return () => {
      document.removeEventListener(
        "keydown",
        changeCurrentMenuItemByKeyPressed
      );

      window.removeEventListener("resize", adjustMenuItemByResizeScreen);
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
        <div className="fade-in delay-1">
          <Logo2 size="normal" />
        </div>
        <div className="menu w-full h-[65vh] md:max-w-[600px] overflow-hidden flex flex-col gap-6">
          <div className="flex gap-4 fade-in delay-2">
            <ul className="flex gap-4 max-sm:gap-1 items-center text-sm max-sm:text-xs">
              <li
                className={`cursor-pointer max-[400px]:hidden  transition-all  mr-5  px-2 py-1 font-bold bg-white rounded-sm uppercase tracking-wider ${
                  currentKey === "q" ? "scale-95 opacity-55" : ""
                }`}
              >
                Q
              </li>
              {items_menu_navigation.map((item, index) => (
                <li
                  key={item.id}
                  onClick={() => {
                    changeMenuItem(index);
                    playSound();
                  }}
                  className={`cursor-pointer  px-3 ${
                    currentMenuItem === index
                      ? "bg-card/60 font-semibold"
                      : "hover:bg-card/40 hover:text-white/100 text-white/60"
                  } rounded-md text-white  py-1.5 uppercase tracking-wider`}
                >
                  {item.name}
                </li>
              ))}
              <li
                className={`cursor-pointer max-[400px]:hidden   transition-all ml-5 px-2 py-1 font-bold bg-white rounded-sm uppercase tracking-wider ${
                  currentKey === "c" ? "scale-95 opacity-55" : ""
                }`}
              >
                C
              </li>
            </ul>
          </div>
          <div
            ref={itemsMenu}
            className="relative menuSlide flex w-min h-full  overflow-hidden  fade-in delay-3"
          >
            {/********************* INICIO *********************************    */}
            <div
              className={`w-[calc(100vw-56px)] h-full max-h-[400px] gap-2  md:max-w-[580px]   flex-1 grid   grid-cols-2 grid-rows-2  ${
                currentMenuItem === 0 ? "fade-in" : "fade-out"
              }`}
            >
              {/****************************************************************    */}

              <div className="col-span-2 relative row-span-1 bg-main flex justify-end rounded-sm overflow-hidden cursor-pointer ">
                <div className="w-full h-full absolute top-0 left-0  bg-custom"></div>
                <div className="w-full self-end flex justify-end z-50 bgGradienteCard  p-4">
                  {" "}
                  <div className="flex flex-col text-white tracking-wide">
                    <span className=" uppercase  text-xs font-semibold tracking-widest text-primary/80 text-nowrap">
                      Visão geral de
                    </span>
                    <span className="text-3xl md:text-4xl font-bold uppercase ">
                      serviços
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full   col-span-2 flex gap-2   ">
                {/****************************************************************    */}
                <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa]  cursor-pointer max-h-[300px] ">
                  <div className="w-full h-full absolute top-0 left-0   ">
                    <Plus
                      size={40}
                      className="text-white absolute top-5 left-5"
                    />
                  </div>
                  <div className="w-full self-end flex justify-start z-50 bgGradienteCard  p-4">
                    {" "}
                    <div className="flex flex-col text-white tracking-wide border-l-2 border-primary/60 pl-3">
                      <span className=" uppercase  text-xs font-semibold tracking-widest text-primary/80 text-nowrap">
                        Adicionar
                      </span>
                      <span className="text-3xl md:text-4xl font-bold uppercase ">
                        Nova OS
                      </span>
                    </div>
                  </div>
                </div>
                {/****************************************************************    */}

                <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa] cursor-pointer  ">
                  <div className="w-full h-full absolute top-0 left-0   ">
                    <ChartSpline
                      size={40}
                      className="text-white absolute top-5 left-5"
                    />
                  </div>
                  <div className="w-full self-end flex justify-start z-50 bgGradienteCard  p-4">
                    <div className="flex flex-col text-white tracking-wide border-l-2 border-primary/60 pl-3">
                      <span className=" uppercase  text-xs font-semibold tracking-widest text-primary/80 text-nowrap">
                        Métricas gerais do
                      </span>
                      <span className="text-3xl md:text-4xl font-bold uppercase ">
                        negócio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/***************** SERVICOS	 ****************************************    */}
            <div
              className={`w-[calc(100vw-56px)] h-full max-h-[400px] gap-2  md:max-w-[580px]   flex-1 grid   grid-cols-2 grid-rows-2  ${
                currentMenuItem === 1 ? "fade-in" : "fade-out"
              }`}
            >
              {/**************PRINCIPAL **************************************    */}

              <div className="col-span-1 relative row-span-2 bg-main flex justify-end rounded-sm overflow-hidden cursor-pointer ">
                <div className="w-full h-full absolute top-0 left-0  bg-custom"></div>
                <div className="w-full self-end flex justify-end z-50 bgGradienteCard  p-4">
                  {" "}
                  <div className="flex flex-col text-white tracking-wide">
                    <span className=" uppercase  text-xs font-semibold tracking-widest text-primary/80 text-nowrap">
                      Todos os
                    </span>
                    <span className="text-3xl md:text-4xl font-bold uppercase ">
                      serviços
                    </span>
                  </div>
                </div>
              </div>
              {/**************SECUNDARIA **************************************    */}

              <div className="w-full   col-span-1 row-span-2 flex flex-col gap-2   ">
                {/****************************************************************    */}
                <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa]  cursor-pointer max-h-[300px] ">
                  <div className="w-full h-full absolute top-0 left-0   ">
                    <Plus
                      size={40}
                      className="text-white absolute top-5 left-5"
                    />
                  </div>
                  <div className="w-full self-end flex justify-start z-50 bgGradienteCard  p-4">
                    {" "}
                    <div className="flex flex-col text-white tracking-wide border-l-2 border-primary/60 pl-3">
                      <span className=" uppercase  text-xs font-semibold tracking-widest text-primary/80 text-nowrap">
                        Adicionar
                      </span>
                      <span className="text-3xl md:text-4xl font-bold uppercase ">
                        Nova OS
                      </span>
                    </div>
                  </div>
                </div>
                {/****************************************************************    */}

                <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa]  cursor-pointer max-h-[300px] ">
                  <div className="w-full h-full absolute top-0 left-0   ">
                    <Search
                      size={40}
                      className="text-white absolute top-5 left-5"
                    />
                  </div>
                  <div className="w-full self-end flex justify-start z-50 bgGradienteCard  p-4">
                    {" "}
                    <div className="flex flex-col text-white tracking-wide border-l-2 border-primary/60 pl-3">
                      <span className=" uppercase  text-xs font-semibold tracking-widest text-primary/80 text-nowrap">
                        Buscar uma
                      </span>
                      <span className="text-3xl md:text-4xl font-bold uppercase ">
                        OS
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/***************** Clientes	 ****************************************    */}
            <div
              className={`w-[calc(100vw-56px)] h-full max-h-[400px] gap-2  md:max-w-[580px]   flex-1 grid   grid-cols-2 grid-rows-2  ${
                currentMenuItem === 2 ? "fade-in" : "fade-out"
              }`}
            >
              {/**************PRINCIPAL **************************************    */}

              <div className="col-span-2 relative row-span-1 bg-main flex justify-end rounded-sm overflow-hidden cursor-pointer ">
                <div className="w-full h-full absolute top-0 left-0  bg-custom"></div>
                <div className="w-full self-end flex justify-end z-50 bgGradienteCard  p-4">
                  {" "}
                  <div className="flex flex-col text-white tracking-wide">
                    <span className=" uppercase  text-xs font-semibold tracking-widest text-primary/80 text-nowrap">
                      Todos os
                    </span>
                    <span className="text-3xl md:text-4xl font-bold uppercase ">
                      Clientes
                    </span>
                  </div>
                </div>
              </div>
              {/**************SECUNDARIA **************************************    */}

              <div className="w-full   col-span-2 flex gap-2   ">
                {/****************************************************************    */}
                <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa]  cursor-pointer  ">
                  <div className="w-full h-full absolute top-0 left-0   ">
                    <Plus
                      size={40}
                      className="text-white absolute top-5 left-5"
                    />
                  </div>
                  <div className="w-full self-end flex justify-start z-50 bgGradienteCard  p-4">
                    {" "}
                    <div className="flex flex-col text-white tracking-wide border-l-2 border-primary/60 pl-3">
                      <span className=" uppercase  text-xs font-semibold tracking-widest text-primary/80 text-nowrap">
                        Adicionar
                      </span>
                      <span className="text-3xl md:text-4xl font-bold uppercase ">
                        novo
                      </span>
                    </div>
                  </div>
                </div>
                {/****************************************************************    */}

                <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa]  cursor-pointer  ">
                  <div className="w-full h-full absolute top-0 left-0   ">
                    <User
                      size={40}
                      className="text-white absolute top-5 left-5"
                    />
                  </div>
                  <div className="w-full self-end flex justify-start z-50 bgGradienteCard  p-4">
                    {" "}
                    <div className="flex flex-col text-white tracking-wide border-l-2 border-primary/60 pl-3">
                      <span className=" uppercase  text-xs font-semibold tracking-widest text-primary/80 text-nowrap">
                        Buscar um
                      </span>
                      <span className="text-3xl md:text-4xl font-bold uppercase ">
                        Cliente
                      </span>
                    </div>
                  </div>
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
