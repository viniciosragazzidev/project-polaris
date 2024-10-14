"use client";

import React, { useEffect, useState } from "react";
import RegisterForm from "./components/register";
import Logo from "../components/logo/logo";
import LoginForm from "./components/login";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [reset, setReset] = useState(true);
  useEffect(() => {
    setReset(false);
    setTimeout(() => {
      setReset(true);
    }, 100);
  }, [isLogin]);
  return (
    <main className="w-full h-screen px-10">
      <div className="w-full h-full flex flex-col justify-center items-center">
        {reset && (
          <>
            <Logo size="small" />
          </>
        )}

        {isLogin ? (
          <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />
        ) : (
          <RegisterForm isLogin={isLogin} setIsLogin={setIsLogin} />
        )}
      </div>
    </main>
  );
};

export default Auth;
