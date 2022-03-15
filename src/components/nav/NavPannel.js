import { useSelector } from "react-redux";

import { GiHamburger } from "react-icons/gi";
import { RiNotification2Line } from "react-icons/ri";
import { FiSearch, FiSettings } from "react-icons/fi";

import Menu from "./Menu";
const NavPannel = ({ isMobileSearchBarOpen, isHamburgerMenuOpen, dispatch }) => {
  const { name, profileImage } = useSelector(state => state.user);

  if (!isMobileSearchBarOpen) {
    return (
      <>
        <section>
          <img
            src={
              profileImage ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eezZEdzm25YbJaAlB6tFjZQyipeAWHwf9Q&usqp=CAU"
            }
          />
          <h2>{name || "default"}</h2>
        </section>
        <div>
          <input placeholder="What are you looking for ?" type="search" />
          <FiSearch />
        </div>
        <section>
          <GiHamburger onClick={() => dispatch({ type: "TOOGLE_HAMBURGER_MENU" })} />

          <FiSearch onClick={() => dispatch({ type: "TOOGLE_MOBILE_SEARCH_BAR" })} />
          <RiNotification2Line
            onClick={() => dispatch({ type: "TOOGLE_NOTIFICATION_MODAL" })}
          />
          <FiSettings onClick={() => dispatch({ type: "TOOGLE_SETTINGS_MODAL" })} />
        </section>
        <Menu dispatch={dispatch} isHamburgerMenuOpen={isHamburgerMenuOpen} />
      </>
    );
  } else {
    return null;
  }
};

export default NavPannel;
