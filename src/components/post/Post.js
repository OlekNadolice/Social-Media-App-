import { useState } from "react";
import { StyledPost } from "./StyledPost";
import DeletePost from "./DeletePost";

import {
  AiOutlineLike,
  AiFillLike,
  AiOutlineDislike,
  AiTwotoneDislike,
} from "react-icons/ai";

import { updateDoc, doc, arrayUnion, arrayRemove } from "firebase/firestore";
import { db } from "FirebaseDB/firebaseConfig";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Post = props => {
  const { author, description, img, likes, dislikes, width, tags, id, postID, setPosts } =
    props;
  const { id: userId } = useSelector(state => state.user);
  const postReference = doc(db, "posts", postID);

  const [likesArray, setLikesArray] = useState(likes);
  const [dislikesArray, setDislikesArray] = useState(dislikes);

  const giveLike = async () => {
    try {
      if (dislikesArray.includes(userId)) {
        await updateDoc(postReference, {
          dislikes: arrayRemove(userId),
        });
      }

      await updateDoc(postReference, {
        likes: arrayUnion(userId),
      });
      setLikesArray(prevState => [...prevState, userId]);
      setDislikesArray(prevState => prevState.filter(e => e !== userId));
    } catch (err) {
      console.log(err);
    }
  };
  const giveDislike = async () => {
    try {
      if (likesArray.includes(userId)) {
        await updateDoc(postReference, {
          likes: arrayRemove(userId),
        });
      }

      await updateDoc(postReference, {
        dislikes: arrayUnion(userId),
      });
      setLikesArray(prevState => prevState.filter(e => e !== userId));
      setDislikesArray(prevState => [...prevState, userId]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledPost
      width={width}
      color={
        likesArray.length > dislikesArray.length
          ? "green"
          : dislikesArray.length > likesArray.length
          ? "red"
          : "#444"
      }
    >
      <section>
        <div>
          {id ? (
            <Link to={`user/${id}`}>
              <img src={img} />
            </Link>
          ) : (
            <img src={img} />
          )}
          <h1>{author}</h1>
        </div>
        <div>
          <span>
            {likesArray.length > dislikesArray.length && ` + ${likesArray.length}`}
            {dislikesArray.length > likesArray.length && ` - ${dislikesArray.length}`}
            {dislikesArray.length == likesArray.length && 0}
          </span>
          {userId === id && <DeletePost setPosts={setPosts} postID={postID} />}
        </div>
      </section>
      <p>{description}</p>
      <ul>
        {tags && tags.length > 0
          ? tags.map(tag => {
              return <li key={tag}>#{tag}</li>;
            })
          : null}
      </ul>

      <div>
        {!dislikesArray.includes(userId) ? (
          <AiOutlineDislike onClick={giveDislike} />
        ) : (
          <AiTwotoneDislike />
        )}
        {!likesArray.includes(userId) ? (
          <AiOutlineLike onClick={giveLike} />
        ) : (
          <AiFillLike />
        )}
      </div>
    </StyledPost>
  );
};
