import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "store/userSlice";

import { auth, db } from "FirebaseDB/firebaseConfig";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import { getStorage, ref } from "firebase/storage";
import { getDoc, doc, setDoc } from "firebase/firestore";

import { BsFacebook } from "react-icons/bs";
import { StyledContainer, StyledForm, Button, FormControl } from "components/index";

export const Login = () => {
  const dispatch = useDispatch();
  const storage = getStorage();
  const [formState, setFormState] = useState({
    emailInput: "",
    passwordInput: "",
    errorEmail: "",
    errorPassword: "",
    error: "",
  });

  const { emailInput, passwordInput, errorEmail, errorPassword, error } = formState;

  const loginUserToPage = async e => {
    try {
      e.preventDefault();
      const response = await signInWithEmailAndPassword(auth, emailInput, passwordInput);
      const { uid } = response.user;

      const user = await getDoc(await doc(db, "users", uid), {});
      const photoURL = await ref(storage, uid);
      const { name, age, description } = user.data();
      dispatch(loginUser({ name, image: photoURL, id: uid, age, description }));
    } catch (err) {
      switch (err.message) {
        case "Firebase: Error (auth/invalid-email).":
          setFormState(prevState => {
            return { ...prevState, errorEmail: "The email is incorrect" };
          });

        case "Firebase: Error (auth/wrong-password).":
          setFormState(prevState => {
            return { ...prevState, errorPassword: "The password is incorrect" };
          });
      }
    }
  };

  const handleInputChange = (e, field) => {
    setFormState(prevState => {
      return { ...prevState, [field]: e.target.value };
    });
  };

  const singUpWithFacebookHandler = async e => {
    try {
      e.preventDefault();
      const provider = new FacebookAuthProvider();
      const response = await signInWithPopup(auth, provider);
      const { uid } = response.user;
      const user = await getDoc(await doc(db, "users", uid), {});
      const photoURL = await ref(storage, uid);
      console.log(photoURL);
      const { name, age, description } = user.data();

      if (!user.exists()) {
        await setDoc(doc(db, "users", uid), {});
      }
      dispatch(
        loginUser({
          name: name,
          age: age,
          description: description,
          image: photoURL,
          id: uid,
        })
      );
    } catch (err) {
      setFormState(prevState => {
        return { ...prevState, error: "Something went wrong" };
      });
    }
  };

  return (
    <StyledContainer>
      <StyledForm>
        <h2>Divisionly</h2>
        {error && <p>{error}</p>}
        <FormControl
          value={emailInput}
          onChange={e => handleInputChange(e, "emailInput")}
          text="Email"
          type="email"
          error={errorEmail}
        />

        <FormControl
          onChange={e => handleInputChange(e, "passwordInput")}
          value={passwordInput}
          text="Password"
          type="password"
          error={errorPassword}
        />

        <Button text="Login" onClick={loginUserToPage} />
        <Button
          backgroundColor="#1873eb"
          text="Sing Up With Facebook"
          children={<BsFacebook />}
          onClick={singUpWithFacebookHandler}
        />

        <Link to="/register">Create account</Link>
      </StyledForm>
    </StyledContainer>
  );
};
