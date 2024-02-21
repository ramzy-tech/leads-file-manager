import { createContext, useState, Dispatch, SetStateAction } from "react";
import { ToastType } from "../types/types";

type GlobalContextType = {
  updateState: boolean;
  setUpdateState: Dispatch<SetStateAction<boolean>>;
  activeParent: number;
  setActiveParent: Dispatch<SetStateAction<number>>;
  currentPath: { id: number; name: string }[];
  setCurrentPath: Dispatch<SetStateAction<Array<{ id: number; name: string }>>>;
  toast: ToastType;
  settoast: Dispatch<SetStateAction<ToastType>>;
};

const defaultValue: GlobalContextType = {
  updateState: false,
  setUpdateState: () => {},
  activeParent: 0,
  setActiveParent: () => {},
  currentPath: [],
  setCurrentPath: () => {},
  toast: { display: false, title: "", message: "", status: "SUCCESS" },
  settoast: () => {},
};

export const GlobalContext = createContext(defaultValue);

export const GlobalContextProvider = ({ children }) => {
  const [updateState, setUpdateState] = useState(false);
  const [activeParent, setActiveParent] = useState(0);
  const [currentPath, setCurrentPath] = useState<
    { id: number; name: string }[]
  >([]);
  const [toast, settoast] = useState<ToastType>({
    display: false,
    title: "",
    message: "",
    status: "SUCCESS",
  });
  return (
    <GlobalContext.Provider
      value={{
        updateState,
        setUpdateState,
        activeParent,
        setActiveParent,
        currentPath,
        setCurrentPath,
        toast,
        settoast,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
