import { useEffect } from "react";
import ReactDOM from "react-dom";
import StyledModal from "./StyledModal";
import { MdClose } from "react-icons/md";

export const Modal = ({ children, setIsOpen, title }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, []);

  return ReactDOM.createPortal(
    <StyledModal>
      <div>
        <header>
          <h3>{title}</h3>
          <MdClose onClick={() => setIsOpen()} />
        </header>
        {children}
      </div>
    </StyledModal>,
    document.getElementById("portal")
  );
};
