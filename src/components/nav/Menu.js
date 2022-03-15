import { MdClose } from "react-icons/md";

const Menu = ({ dispatch, isHamburgerMenuOpen }) => {
  if (isHamburgerMenuOpen) {
    return (
      <section>
        <span className="closebtn">
          <MdClose onClick={() => dispatch({ type: "TOOGLE_HAMBURGER_MENU" })} />
        </span>
        <span>
          <p>Home</p>
          <p>Settings</p>
          <p>Logout</p>
        </span>
      </section>
    );
  } else {
    return null;
  }
};

export default Menu;
