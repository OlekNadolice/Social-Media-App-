import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";

import PromptSearchBar from "components/PromptSearchBar/PromptSearchBar";
import StyledSearchBar from "./StyledSearchBar";
import { MdOutlineClose } from "react-icons/md";
import { BiNavigation } from "react-icons/bi";

import { getDocs, collection } from "firebase/firestore";
import { db } from "FirebaseDB/firebaseConfig";

const SearchBar = ({ dispatch, width }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchPromptOpen, setSearchPromptOpen] = useState(false);
  const [tags, setTags] = useState([]);
  let count = 0;

  useEffect(() => {
    const fetchAllTags = async () => {
      try {
        const dbReference = collection(db, "tags");
        const response = await getDocs(dbReference);
        const data = response.docs.map(doc => doc.data());
        data.forEach(element => (element.visible = true));

        setTags(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllTags();
  }, []);

  const handleInputChange = async e => {
    setInputValue(e.target.value);
    setTags(prevState =>
      prevState.map(element => {
        if (
          element.tag.toLowerCase().includes(e.target.value.toLowerCase()) ||
          e.target.value === ""
        ) {
          return { ...element, visible: true };
        } else {
          return { ...element, visible: false };
        }
      })
    );
  };

  const focusedInputHandler = e => {
    setSearchPromptOpen(true);
  };

  const handleInputKeyPress = e => {
    console.log(e);

    if (e.key === "ArrowDown") {
      // e.target.parentNode.childNodes[2].childNodes[0];
    }
  };

  const closePromptSearchBarHandler = e => {
    e.stopPropagation();

    if (
      e.nativeEvent.explicitOriginalTarget.tagName != "SECTION" &&
      e.nativeEvent.explicitOriginalTarget.tagName != "A"
    ) {
      setSearchPromptOpen(false);
    }
  };

  return (
    <StyledSearchBar width={width} onBlur={closePromptSearchBarHandler}>
      <input
        value={inputValue}
        onClick={focusedInputHandler}
        onKeyUp={handleInputKeyPress}
        onChange={handleInputChange}
        placeholder="What are you looking for ?"
        type="search"
      />
      <div>
        {inputValue.length > 0 ? (
          <MdOutlineClose onClick={() => setInputValue("")} />
        ) : (
          <FiSearch />
        )}
        {dispatch && (
          <BiNavigation onClick={() => dispatch({ type: "TOOGLE_MOBILE_SEARCH_BAR" })} />
        )}{" "}
      </div>
      {searchPromptOpen ? <PromptSearchBar tags={tags} /> : null}
    </StyledSearchBar>
  );
};

export default SearchBar;
