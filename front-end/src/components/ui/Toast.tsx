"use client";
import successIcon from "../../assets/success.svg";
import errorIcon from "../../assets/error.svg";
import closeIcon from "../../assets/colse.svg";
import { twMerge } from "tailwind-merge";
import { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/store";

const Toast = () => {
  const { toast, settoast } = useContext(GlobalContext);
  const { display, title, message, status } = toast;

  useEffect(() => {
    const timerId = setTimeout(() => {
      settoast((oldState) => ({ ...oldState, display: false }));
    }, 3000);

    return () => clearTimeout(timerId);
  }, [display, settoast]);

  return (
    <>
      <div
        className={twMerge(
          "animate-fade fixed left-1/2 z-20 flex w-10/12 translate-x-[-50%] items-center rounded-lg p-2 lg:w-max",
          status === "SUCCESS" ? "bg-green-500" : "bg-red-800 text-white",
          display
            ? "translate-y-8 transition-transform duration-300"
            : "-translate-y-12",
        )}
      >
        <div className="mr-2 flex-shrink-0 lg:mr-6">
          <img
            src={status === "SUCCESS" ? successIcon : errorIcon}
            alt="toast icon"
            className="w-[25px]"
          />
        </div>
        <div className="flex-grow text-lg">
          <p className="font-semibold capitalize text-white">{title}</p>
          <p className="font-semibold text-white">{message}</p>
        </div>
        <div className="flex-shrink-0">
          <img
            src={closeIcon}
            alt="close toast"
            className="ml-2 w-[25px] cursor-pointer lg:ml-6"
            onClick={() =>
              settoast((oldState) => ({ ...oldState, display: false }))
            }
          />
        </div>
      </div>
    </>
  );
};

export default Toast;
