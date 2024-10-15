"use client";

import { ChartSpline, Plus, Search, User } from "lucide-react";

const ItemsMenu = ({
  currentMenuItem,
  itemsMenu,
}: {
  currentMenuItem: number;
  itemsMenu: React.RefObject<HTMLDivElement>;
}) => {
  return (
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

        <div className="col-span-2 relative row-span-1 bg-main flex justify-end hover:border-b hover:border-primary/60  rounded-sm overflow-hidden cursor-pointer ">
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
          <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa] hover:border-b hover:border-primary/60  cursor-pointer max-h-[300px] ">
            <div className="w-full h-full absolute top-0 left-0   ">
              <Plus size={40} className="text-white absolute top-5 left-5" />
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

          <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa] hover:border-b hover:border-primary/60 cursor-pointer  ">
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

        <div className="col-span-1 relative row-span-2 bg-main flex justify-end hover:border-b hover:border-primary/60  rounded-sm overflow-hidden cursor-pointer ">
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
          <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa] hover:border-b hover:border-primary/60  cursor-pointer max-h-[300px] ">
            <div className="w-full h-full absolute top-0 left-0   ">
              <Plus size={40} className="text-white absolute top-5 left-5" />
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

          <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa] hover:border-b hover:border-primary/60  cursor-pointer max-h-[300px] ">
            <div className="w-full h-full absolute top-0 left-0   ">
              <Search size={40} className="text-white absolute top-5 left-5" />
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

        <div className="col-span-2  relative row-span-1 bg-main flex justify-end hover:border-b hover:border-primary/60  rounded-sm overflow-hidden cursor-pointer ">
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
          <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa] hover:border-b hover:border-primary/60  cursor-pointer  ">
            <div className="w-full h-full absolute top-0 left-0   ">
              <Plus size={40} className="text-white absolute top-5 left-5" />
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

          <div className="flex-1 flex justify-end relative rounded-sm overflow-hidden  bg-[#000408aa] hover:border-b hover:border-primary/60  cursor-pointer  ">
            <div className="w-full h-full absolute top-0 left-0   ">
              <User size={40} className="text-white absolute top-5 left-5" />
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
  );
};

export default ItemsMenu;
