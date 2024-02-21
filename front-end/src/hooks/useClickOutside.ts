import { useEffect, useRef } from "react";

const useClickOutside = (closeHandler) => {
  const domNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blurHandler = (event) => {
      if (!domNodeRef.current?.contains(event.target)) closeHandler(false);
    };
    document.addEventListener("mousedown", blurHandler);

    return () => document.removeEventListener("mousedown", blurHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return domNodeRef;
};

export default useClickOutside;
