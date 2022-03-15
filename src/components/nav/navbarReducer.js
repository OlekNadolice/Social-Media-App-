export const initialState = {
  isHamburgerMenuOpen: false,
  isMobileSearchBarOpen: false,
  isNotificationModalOpen: false,
  isSettingsModalOpen: false,
};

const navbarReducer = (state, action) => {
  switch (action.type) {
    case "TOOGLE_HAMBURGER_MENU":
      return { ...state, isHamburgerMenuOpen: !state.isHamburgerMenuOpen };
    case "TOOGLE_MOBILE_SEARCH_BAR":
      return { ...state, isMobileSearchBarOpen: !state.isMobileSearchBarOpen };
    case "TOOGLE_NOTIFICATION_MODAL":
      return { ...state, isNotificationModalOpen: !state.isNotificationModalOpen };
    case "TOOGLE_SETTINGS_MODAL":
      return { ...state, isSettingsModalOpen: !state.isSettingsModalOpen };

    default:
      return { ...state };
  }
};

export default navbarReducer;
