import { ReactNode, useEffect } from "react";
import { Icon } from "../Icon/Icon";

export interface ModalContainerProps {
  children: ReactNode;
}

function ModalContainer({ children }: ModalContainerProps) {
  useEffect(() => {
    document.querySelector('body')?.classList.remove("overflow-y-auto");
    document.querySelector('body')?.classList.add("overflow-y-hidden");
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-dark-3/20 dark:bg-dark-6/20 fixed top-0 left-0 z-50">
      { children }
    </div>
  )
}

export interface ModalContentProps {
  children: ReactNode;
  className?: string;
}


function ModalContent({ children, className }: ModalContentProps) {
  return (
    <div className={["flex flex-col justify-center p-12 rounded-lg bg-white dark:bg-dark-1 shadow-lg shadow-dark-1 relative", className].join(" ")}>
      { children }
    </div>
  )
}

export interface ModalCloseButtonProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalCloseButton({ setIsOpen }: ModalCloseButtonProps) {
  function handleClick() {
    document.querySelector('body')?.classList.add("overflow-y-auto");
    document.querySelector('body')?.classList.remove("overflow-y-hidden");
    setIsOpen(false);
  }

  return (
    <button onClick={ () => handleClick() }
      className="rounded-full hover:bg-red/10 active:bg-red/20 absolute top-2 right-2 p-2"
    >
        <Icon icon="close" color="red" />
    </button>
  )
}

export const Modal = {
  Container: ModalContainer,
  Content: ModalContent,
  CloseButton: ModalCloseButton
}