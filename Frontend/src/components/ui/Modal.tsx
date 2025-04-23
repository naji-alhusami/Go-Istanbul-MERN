import { createPortal } from "react-dom";
import { type ReactNode } from "react";

import "./Modal.css";

type ModalProps = {
  children: ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return createPortal(
    <>
      <div className="fixed top-0 left-0 w-full h-full  bg-opacity-50" />
      <dialog
        id="modal"
        className="z-40 p-6 fixed w-[350px] sm:w-[450px] md:w-[500px] bg-white rounded-lg shadow-md"
        open
      >
        <div className="flex flex-col">{children}</div>
      </dialog>
    </>,
    document.getElementById("modal")!
  );
}
