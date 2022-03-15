import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { addDoc, collection } from "firebase/firestore";
import { db } from "FirebaseDB/firebaseConfig";

import StyledNewPostCard from "./StyledNewPostCard";
import TagsContainer from "./TagsContainer";

export const AddNewPostCard = ({ setIsOpen }) => {
  const [tags, setTags] = useState([]);
  const [error, setError] = useState("");
  const inputRef = useRef("");
  const textAreaRef = useRef("");
  const postsRef = collection(db, "posts");
  const { id } = useSelector(state => state.user);

  const addTagToPostHandler = e => {
    if (e.key === "Enter") {
      e.preventDefault();
      const output = e.target.value;
      setTags(prevState => [...prevState, output]);
      inputRef.current.value = "";
    }
  };

  const addNewPostHandler = async e => {
    e.preventDefault();
    if (tags.length > 0 && textAreaRef.current.value.length >= 1) {
      await addDoc(postsRef, {
        tags: [...tags],
        body: textAreaRef.current.value,
        likes: [],
        dislikes: [],
        created: new Date(),
        author: id,
      });
      setIsOpen();
      console.log("dodalem post");
    } else {
      setError("All fields must be entered");
    }
  };

  return (
    <StyledNewPostCard>
      {error && <p>{error}</p>}
      <input
        ref={inputRef}
        onKeyDown={addTagToPostHandler}
        type="text"
        placeholder="Add tag..."
      />
      <TagsContainer tags={tags} setTags={setTags} />

      <label>Description</label>
      <textarea ref={textAreaRef} placeholder="Describe your problem here..."></textarea>
      <span>
        <button onClick={() => setIsOpen()}>Cancel</button>
        <button onClick={addNewPostHandler}>Add post</button>
      </span>
    </StyledNewPostCard>
  );
};
