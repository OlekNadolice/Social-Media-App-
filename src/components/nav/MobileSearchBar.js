import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";
const MobileSearchBar = ({ isMobileSearchBarOpen, dispatch }) => {
  if (isMobileSearchBarOpen) {
    return (
      <span>
        <input placeholder="What are you looking for ?" type="search" />
        <FiSearch />
        <MdClose onClick={() => dispatch({ type: "TOOGLE_MOBILE_SEARCH_BAR" })} />
      </span>
    );
  } else {
    return null;
  }
};

export default MobileSearchBar;
