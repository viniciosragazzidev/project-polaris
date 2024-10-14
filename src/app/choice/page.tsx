"use client";

import { LogOut, SquareArrowLeft } from "lucide-react";

import React, { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import Cards from "./components/cards";
import { NotifyContext } from "../contexts/NotifyContext";
import Logo2 from "../components/logo/logo_2";

const Choice = () => {
  const router = useRouter();
  const { setMessage } = useContext(NotifyContext);

  useEffect(() => {
    setMessage("Escolha uma das opções abaixo para prosseguir.");
  }, []);
  return (
    <main className="w-full h-screen border-t-4 border-primary">
      <div className="px-10 w-full h-full flex flex-col gap-10">
        <header className="w-full flex   fade-in justify-between gap-3 py-4  items-center">
          <Logo2 />
          <div className="flex gap-3 items-center self-end">
            <span
              className={`text-white text-center text-base flex items-center gap-1 max-sm:text-xs  delay-1  fade-in max-sm:hidden `}
            >
              <span>Aperte</span>
              <span className="flex items-center gap-1 cursor-pointer hover:scale-[.97] transition-all  text-primary">
                <SquareArrowLeft className="" size={16} />
                Enter
              </span>
              <span> ou clique para continuar.</span>
            </span>
            <div className="divider w-[1px] bg-white h-[70%]"></div>

            <span
              onClick={() => router.push("/")}
              className="cursor-pointer text-white"
            >
              <LogOut size={18} />
            </span>
          </div>
        </header>

        <Cards />
      </div>
    </main>
  );
};

export default Choice;
