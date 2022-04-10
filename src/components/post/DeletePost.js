import { useState } from "react";

import { BsBucketFill } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import { Modal, Button } from "components/index";
import styled from "styled-components";
import { animationVariants } from "./StyledPost";

import { db } from "FirebaseDB/firebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";

const DeletePost = ({ postID, setPosts }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const deletePostHandler = async () => {
    try {
      await deleteDoc(doc(db, "posts", postID));
      setIsModalOpen(false);
      setPosts(prevState => prevState.filter(element => element.postID !== postID));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <BsBucketFill onClick={() => setIsModalOpen(true)} />

      {isModalOpen && (
        <Modal
          variants={animationVariants}
          headerHeight="45px"
          height="180px"
          title="Confirm Deletion"
          setIsOpen={() => setIsModalOpen(false)}
        >
          <StyledDeleteContainer>
            <section>
              <AiOutlineExclamationCircle />
              <p>Are you sure you want to delete this post ?</p>
            </section>
            <section>
              <Button
                backgroundColor="#fff"
                border="2px solid #6057cc "
                color="#444"
                onClick={() => setIsModalOpen(false)}
                width="100px"
                text="Cancel"
              />
              <Button onClick={deletePostHandler} width="100px" text="Yes, delete" />
            </section>
          </StyledDeleteContainer>
        </Modal>
      )}
    </>
  );
};

export default DeletePost;

const StyledDeleteContainer = styled.section`
  color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100% - 60px);
  gap: 15px;
  text-align: center;

  p {
    font-size: 18px;
    color: #444;
  }

  section {
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      font-size: 35px;
    }
  }
`;
