"use client";
import React, { useContext, useEffect, useState } from "react";
import { Loader2, SquareArrowLeft } from "lucide-react";

import { NotifyContext } from "@/app/contexts/NotifyContext";
import { useRouter } from "next/navigation";
import Logo from "../logo/logo";
function LoadScreen() {
  const [isLoad, setIsLoad] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoad(true);
    }, 2000);
  }, []);

  // Click enter end verify login. If not isLogged, a notification will appear

  const [isLogged, setIsLogged] = useState(false);
  const [loadingVerify, setLoadingVerify] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Context

  const { setMessage } = useContext(NotifyContext);
  const router = useRouter();
  const handleNotification = () => {
    if (!isLogged) {
      setIsRedirecting(true);
      setMessage(`Você deve efetuar login antes de entrar. Redirecionando...`);
      setTimeout(() => {
        router.push("/auth");
      }, 3000);
    } else {
      setIsRedirecting(true);
    }
  };
  const handleVerifyLogin = () => {
    setLoadingVerify(true);
    setTimeout(() => {
      setLoadingVerify(false);
      setIsLogged(false);

      handleNotification();
    }, 3000);
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        (event.key === "Enter" || event.key === "Enter") &&
        isLoad &&
        !loadingVerify
      ) {
        handleVerifyLogin();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLoad]);

  return (
    <main className="w-screen h-full flex flex-col justify-center items-center">
      <Logo size="small" />

      <span className="absolute bottom-12 ">
        {isLoad &&
          (!loadingVerify && !isRedirecting ? (
            <span
              className={`text-white text-center text-sm flex items-center gap-1  delay-2  fade-in `}
            >
              <span>Aperte</span>
              <span
                onClick={() => handleVerifyLogin()}
                className="flex items-center gap-1 cursor-pointer hover:scale-[.97] transition-all  text-primary"
              >
                <SquareArrowLeft className="" size={16} />
                Enter
              </span>
              <span> ou clique para continuar.</span>
            </span>
          ) : (
            <span className="text-primary">
              <Loader2 className="animate-spin" size={16} />
            </span>
          ))}
      </span>
    </main>
  );
}

export default LoadScreen;
