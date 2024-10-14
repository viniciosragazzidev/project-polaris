"use client";
import React, { FormEvent, useState } from "react";
import { Lock, LogIn, ToggleLeft, ToggleRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Input from "@/app/components/input";
const LoginForm = ({
  isLogin,
  setIsLogin,
}: {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isRememberAccount, setIsRememberAccount] = useState(false);
  const router = useRouter();
  const onSubmitLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/choice");
  };
  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => onSubmitLogin(e)}
      className="w-full max-w-[390px] flex flex-col gap-4 mt-8 fade-in delay-2"
      action=""
    >
      <Input icon={<User />} name="user" type="text" placeholder="Usuário" />

      <Input
        icon={<Lock />}
        name="password"
        type="password"
        placeholder="Senha"
      />

      <Button
        type="submit"
        className="w-full mt-2 font-normal rounded-lg text-base"
        variant="default"
        size="default"
      >
        Entrar <LogIn size={20} className="ml-2" />
      </Button>
      <div className="flex justify-between w-full items-center text-gray-400">
        <div
          className="flex items-center gap-2 cursor-pointer active:opacity-50 transition-all"
          onClick={() => setIsRememberAccount(!isRememberAccount)}
        >
          <>
            {isRememberAccount ? (
              <ToggleLeft size={24} className="text-primary" />
            ) : (
              <ToggleRight size={24} className="text-primary" />
            )}
          </>
          <p className="text-sm">Lembrar senha?</p>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer active:scale-[0.97] transition-all"
          onClick={() => setIsLogin(!isLogin)}
        >
          <p className="text-sm">Criar uma conta</p>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
