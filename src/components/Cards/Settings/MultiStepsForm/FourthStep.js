import { useSelector, useDispatch } from "react-redux";
import { oneStepBackwards, resetFormSteps } from "store/StepFormSlice";
import { updateUserInfo } from "store/userSlice";
import { useState } from "react";
import { Button, StyledTextArea } from "components/index";

import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { setDoc, doc } from "@firebase/firestore";
import { db } from "FirebaseDB/firebaseConfig";

const FourthStep = ({ setIsOpen }) => {
  const { name, profileImage, age, navUserImage } = useSelector(state => state.StepForm);
  const { id, description } = useSelector(state => state.user);
  const [textAreaValue, setTextAreaValue] = useState(description);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const storage = getStorage();
  const storageRef = ref(storage, id);
  const saveSettings = async e => {
    try {
      profileImage && (await uploadBytesResumable(storageRef, profileImage));

      await setDoc(doc(db, "users", id), {
        name,
        age,
        description: textAreaValue,
      });

      dispatch(updateUserInfo({ name, profileImage: navUserImage }));
      setIsOpen();
      dispatch(resetFormSteps());
    } catch (err) {
      setError("Ups Something Went Wrong!");
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <label>Description</label>
      <StyledTextArea
        value={textAreaValue}
        onChange={e => setTextAreaValue(e.target.value)}
      />
      <Button text="Submit" onClick={saveSettings} />
      <Button text="Back" onClick={() => dispatch(oneStepBackwards(3))} />
    </>
  );
};

export default FourthStep;
