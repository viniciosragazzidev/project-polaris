"use client";

import { GlobalContext } from "@/app/contexts/GlobalContext";
import { NotifyContext } from "@/app/contexts/NotifyContext";
import notify_sound from "@/medias/notification.mp3";
import { AlertCircle } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { play } from "../sound/play";

const Notify: React.FC<{ delay?: number }> = ({ delay = 0 }) => {
  const { message, setMessage } = useContext(NotifyContext);
  // const [nextMessage, setNextMessage] = useState("");
  const [currentAnimationActive, setCurrentAnimationActive] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showMessageAnimation, setShowMessageAnimation] = useState(false);
  const notifyRef = useRef<HTMLDivElement>(null);

  const showMessageTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const resetNotify = () => {
    if (showMessageTimeoutRef.current) {
      clearTimeout(showMessageTimeoutRef.current);
      showMessageTimeoutRef.current = null;
    }
    setShowMessageAnimation(false);
    setCurrentAnimationActive(false);
  };
  const { globalSound } = useContext(GlobalContext);

  const showMessagefunc = () => {
    setTimeout(() => {
      setCurrentAnimationActive(true);
      setShowMessage(true);
      if (globalSound) {
        play({ item: notify_sound });
      }

      setTimeout(() => {
        if (notifyRef.current) {
          const calculatedWidth = notifyRef.current.scrollWidth;
          notifyRef.current.style.setProperty(
            "--calculated-width",
            `${calculatedWidth}px`
          );
        }
        setShowMessageAnimation(true);
      }, 1000);

      showMessageTimeoutRef.current = setTimeout(() => {
        notifyRef.current?.style.setProperty("width", "38px");
        setTimeout(() => {
          // adicionar classe fadeOut
          notifyRef.current?.style.setProperty("animation-name", "fadeOut");
          notifyRef.current?.style.setProperty("animation-duration", "0.8s");
        }, 800);

        setTimeout(() => {
          resetNotify();
          setMessage("");
        }, 1000);
      }, 10000); // Durarão de 5 segundos
    }, delay * 1000);
  };

  useEffect(() => {
    // se message
    if (message && message !== "") {
      if (!currentAnimationActive) {
        showMessagefunc();
      } else {
        resetNotify();
        setTimeout(() => {
          showMessagefunc();
        }, 500);
      }
    }
  }, [message, setMessage, delay]);

  return (
    message &&
    message !== "" && (
      <>
        {showMessage && (
          <div
            ref={notifyRef}
            className={`notify z-[888] fixed mx-auto top-10 flex flex-nowrap items-center gap-2 rounded-xl po left-0 right-0 overflow-hidden ${
              showMessageAnimation ? "notify-expand-animation" : ""
            } p-2 bg-card`}
          >
            <AlertCircle className="text-primary block min-w-[24px] max-w-[24px]" />
            <p className="text-nowrap text-white text-sm">{message}</p>
          </div>
        )}
      </>
    )
  );
};

export default Notify;
