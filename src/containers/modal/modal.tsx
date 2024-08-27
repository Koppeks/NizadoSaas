import React, { useEffect } from "react";
import { forwardRef } from "react";

interface ModalProps {
  children: React.ReactNode,
  isOpen: boolean,
  className: string,
  handleClose: () => void
}

export const Modal = forwardRef<HTMLElement, ModalProps>(({children, isOpen, handleClose, className, ...props}, ref) => {
  
  useEffect(() => {
    const closeOnScapeKey = (e:KeyboardEvent) => {
      e.key === "Escape" ? handleClose() : null;
      console.log(e)
      }
      document.body.addEventListener("keydown", closeOnScapeKey);
      return () => {document.body.removeEventListener("keydown", closeOnScapeKey)}
  },[handleClose])

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    }
  },[isOpen])

  if(!isOpen) return null

  return(
    <div className={className}>
      <div className="modal">
        {children}
      </div>
      <div className="gray_screen"></div>
    </div>
  )
})