import { Link } from "react-router-dom";
import useMediaQuery from "hooks/useMediaQuery";
import { useDispatch } from "react-redux";
import { logoutUser } from "store/userSlice";

import { BsMessenger } from "react-icons/bs";
import { FiSearch, FiSettings } from "react-icons/fi";
import { BiLogOut, BiHome } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";

const NavigationRight = ({ dispatch }) => {
  const dispatchRedux = useDispatch();
  const visible = useMediaQuery("(max-width:660px)");
  const openAddPostModal = () => {
    dispatch({ type: "TOOGLE_NOTIFICATION_MODAL" });
  };

  const openSettingsModal = () => {
    dispatch({ type: "TOOGLE_SETTINGS_MODAL" });
  };

  return (
    <section>
      <Link to="/home">
        <BiHome />
      </Link>
      <Link to="/chat">
        <BsMessenger />
      </Link>

      {visible && (
        <FiSearch onClick={() => dispatch({ type: "TOOGLE_MOBILE_SEARCH_BAR" })} />
      )}

      <IoIosAdd onClick={openAddPostModal} />

      <FiSettings onClick={openSettingsModal} />

      <BiLogOut onClick={() => dispatchRedux(logoutUser())} />
    </section>
  );
};

export default NavigationRight;
