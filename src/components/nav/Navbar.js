import { useReducer } from "react";
import { useSelector } from "react-redux";

import { Modal, AddNewPostCard, WelcomePopUp } from "components/index";
import StyledNavbar from "./StyledNavbar";

import navbarReducer, { initialState } from "./navbarReducer";
import NavPannel from "./NavPannel";
import MobileSearchBar from "./MobileSearchBar";

export const Navbar = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const [state, dispatch] = useReducer(navbarReducer, initialState);
  const {
    isHamburgerMenuOpen,
    isMobileSearchBarOpen,
    isNotificationModalOpen,
    isSettingsModalOpen,
  } = state;

  if (isLoggedIn) {
    return (
      <>
        <StyledNavbar>
          <NavPannel
            dispatch={dispatch}
            isMobileSearchBarOpen={isMobileSearchBarOpen}
            isHamburgerMenuOpen={isHamburgerMenuOpen}
          />
          <MobileSearchBar
            isMobileSearchBarOpen={isMobileSearchBarOpen}
            dispatch={dispatch}
          />
        </StyledNavbar>
        {isNotificationModalOpen && (
          <Modal
            title="Add a New Post!"
            setIsOpen={() => dispatch({ type: "TOOGLE_NOTIFICATION_MODAL" })}
            isOpen={isNotificationModalOpen}
          >
            <AddNewPostCard
              setIsOpen={() => dispatch({ type: "TOOGLE_NOTIFICATION_MODAL" })}
            />
          </Modal>
        )}
        <WelcomePopUp
          isOpen={isSettingsModalOpen}
          setIsOpen={() => dispatch({ type: "TOOGLE_SETTINGS_MODAL" })}
        />
      </>
    );
  } else {
    return null;
  }
};
