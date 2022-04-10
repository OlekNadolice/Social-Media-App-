import NavigationRight from "./NavigationRight";
import NavigationLeft from "./NavigationLeft";
import SearchBar from "components/SearchBar/SearchBar";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { useState } from "react";
import MobileSidebar from "./MobileSidebar";
import { AnimatePresence } from "framer-motion";
import useMediaQuery from "hooks/useMediaQuery";

const NavPannel = ({ isMobileSearchBarOpen, dispatch }) => {
  const visible = useMediaQuery("(min-width:660px)");
  const maxWidth660 = useMediaQuery("(max-width:660px)");
  const [isMobileNavigationOpen, setIsMobileNavigationOpen] = useState(false);

  if (!isMobileSearchBarOpen) {
    return (
      <>
        <NavigationLeft />
        {visible && <SearchBar />}
        {visible && <NavigationRight dispatch={dispatch} />}
        {maxWidth660 && !isMobileNavigationOpen && (
          <GiHamburgerMenu onClick={() => setIsMobileNavigationOpen(true)} />
        )}
        {maxWidth660 && isMobileNavigationOpen && (
          <CgClose onClick={() => setIsMobileNavigationOpen(false)} />
        )}
        <AnimatePresence>
          {isMobileNavigationOpen && (
            <MobileSidebar isOpen={isMobileNavigationOpen} dispatch={dispatch} />
          )}
        </AnimatePresence>
      </>
    );
  } else {
    return null;
  }
};

export default NavPannel;
