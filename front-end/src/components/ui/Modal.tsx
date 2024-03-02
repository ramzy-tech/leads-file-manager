import { ReactNode, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { twMerge } from "tailwind-merge";
import useClickOutside from "../../hooks/useClickOutside";

type Props = {
  children: ReactNode;
  containerStyle?: string;
  onClose?: () => void;
};

export type ModalApiType = {
  open: () => void;
  close: () => void;
};

const Modal = forwardRef<ModalApiType, Props>(
  ({ children, containerStyle = "", onClose }: Props, ref) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    const closeHandler = () => {
      onClose && onClose();
      modalRef.current?.close();
    };
    const parentDivRef = useClickOutside(closeHandler);

    useImperativeHandle(ref, () => ({
      open() {
        modalRef.current?.showModal();
      },
      close() {
        closeHandler();
      },
    }));

    return createPortal(
      <dialog
        className={twMerge(
          "rounded-lg font-semibold outline-none backdrop:bg-[rgba(0,0,0,0.2)]",
        )}
        ref={modalRef}
      >
        <div ref={parentDivRef} className={containerStyle}>
          {children}
        </div>
      </dialog>,
      document.getElementById("modal")!,
    );
  },
);

export default Modal;
