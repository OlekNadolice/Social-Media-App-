import { useEffect } from "react";
import ReactDOM from "react-dom";
import StyledModal from "./StyledModal";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import Backdrop from "./Backdrop";

export const Modal = ({ children, setIsOpen, title, height, headerHeight, variants }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, []);

  return ReactDOM.createPortal(
    <Backdrop>
      <StyledModal height={height} headerHeight={headerHeight}>
        <motion.div
          initial={variants?.hidden}
          animate={variants?.visible}
          transition={variants?.transition}
        >
          <header>
            <h3>{title}</h3>
            <MdClose onClick={() => setIsOpen()} />
          </header>
          {children}
        </motion.div>
      </StyledModal>
    </Backdrop>,
    document.getElementById("portal")
  );
};
