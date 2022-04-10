import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "store/userSlice";
import { motion, AnimatePresence } from "framer-motion";

const MobileSidebar = ({ dispatch, isOpen }) => {
  const reduxDispatch = useDispatch();
  const openAddPostModal = () => {
    dispatch({ type: "TOOGLE_NOTIFICATION_MODAL" });
  };

  const openSettingsModal = () => {
    dispatch({ type: "TOOGLE_SETTINGS_MODAL" });
  };

  return (
    // <AnimatePresence>

    <StyledMobileSidebar
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0, x: 30 }}
    >
      <Link to="/home">Home</Link>
      <Link to="/chat">Chat</Link>
      <p onClick={openAddPostModal}>Add Post</p>
      <p onClick={openSettingsModal}>Settings</p>
      <p onClick={() => reduxDispatch(logoutUser())}>Logout</p>
    </StyledMobileSidebar>

    // </AnimatePresence>
  );
};

export default MobileSidebar;

const StyledMobileSidebar = styled(motion.aside)`
  position: absolute;
  top: 70px;
  right: 0;
  width: 200px;
  display: flex;
  flex-direction: column;
  background-color: #6152cb;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: calc(100vh - 70px);

  a,
  p {
    color: #fff;
    font-size: 18px;
    cursor: pointer;
    padding-bottom: 15px;
  }
`;
