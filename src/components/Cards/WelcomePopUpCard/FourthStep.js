import { useSelector, useDispatch } from "react-redux";
import { oneStepBackwards } from "store/StepFormSlice";
import { updateUserInfo } from "store/userSlice";
import { useState } from "react";
import { Button, StyledTextArea } from "components/index";

import { updateProfile } from "firebase/auth";
import { auth } from "FirebaseDB/firebaseConfig";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { setDoc, doc } from "@firebase/firestore";
import { db } from "FirebaseDB/firebaseConfig";

const FourthStep = () => {
  const { currentStep, name, profileImage, age } = useSelector(state => state.StepForm);
  const { id, description } = useSelector(state => state.user);
  const [textAreaValue, setTextAreaValue] = useState(description);
  const dispatch = useDispatch();
  const storage = getStorage();
  const storageRef = ref(storage, id);
  const saveSettings = async e => {
    try {
      await uploadBytes(storageRef, profileImage);
      await setDoc(doc(db, "users", id), {
        name,
        age,
        description: textAreaValue,
      });
      // await updateProfile(auth.currentUser, {
      //   displayName: name,
      // });
      dispatch(updateUserInfo({ name, profileImage }));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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
