"use client";
import { GlobalContext } from "@/app/contexts/GlobalContext";
import { Volume2, VolumeOff } from "lucide-react";
import { useContext } from "react";

const SystemSuspenseSettings = () => {
  const { globalSound, setGlobalSound } = useContext(GlobalContext);

  return (
    <div
      onClick={() => setGlobalSound(!globalSound)}
      className="p-2 rounded-lg bg-primary active:scale-[.98]	 text-white  flex justify-center items-center cursor-pointer fixed bottom-4 right-4"
    >
      {globalSound ? (
        <Volume2 size={16} className=" cursor-pointer" />
      ) : (
        <VolumeOff size={16} className=" cursor-pointer" />
      )}
    </div>
  );
};

export default SystemSuspenseSettings;
