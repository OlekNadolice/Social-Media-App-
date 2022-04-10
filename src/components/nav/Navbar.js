import { useReducer } from "react";
import { useSelector } from "react-redux";

import { Modal, AddNewPostCard, WelcomePopUp } from "components/index";
import StyledNavbar from "./StyledNavbar";

import navbarReducer, { initialState } from "./navbarReducer";
import NavPannel from "./NavPannel";

import SearchBar from "components/SearchBar/SearchBar";

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
          {isMobileSearchBarOpen && <SearchBar width="300px" dispatch={dispatch} />}
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
