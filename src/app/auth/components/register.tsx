"use client";
import React from "react";
import { AtSign, Building, Lock, LogIn, User, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Input from "@/app/components/input";
const RegisterForm = ({
  isLogin,
  setIsLogin,
}: {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <form
      className="w-full max-w-[400px] flex flex-col gap-4 mt-8 fade-in delay-2"
      action=""
    >
      <div className="flex w-full gap-4">
        <Input icon={<User />} name="nome" type="text" placeholder="Nome" />
        <Input
          name="sobrenome"
          type="text"
          placeholder="Sobrenome"
          icon={<User />}
        />
      </div>
      <div className="flex w-full gap-4">
        <Input
          icon={<UserCircle />}
          name="username"
          type="text"
          placeholder="Usuário"
        />
        <Input
          icon={<Building />}
          name="company"
          type="text"
          placeholder="Empresa"
        />
      </div>
      <Input icon={<AtSign />} name="email" type="email" placeholder="Email" />
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
        Criar conta <LogIn size={20} className="ml-2" />
      </Button>
      <div className="flex justify-between w-full items-center text-gray-400">
        <div
          className="flex w-full justify-end items-center gap-2 cursor-pointer active:scale-[0.97] transition-all"
          onClick={() => setIsLogin(!isLogin)}
        >
          <p className="text-sm">Entrar em uma conta</p>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
