import { useFormik } from "formik";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "FirebaseDB/firebaseConfig";

import { setDoc, doc } from "@firebase/firestore";
import * as Yup from "yup";

import ThankYou from "./ThankYou";
import { StyledContainer, StyledForm, Button, FormControl } from "components/index";

const Register = () => {
  const [formState, setFormState] = useState({
    error: "",
    submited: false,
  });
  const { error, submited } = formState;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required!").email("Invalid email adress"),
      password: Yup.string()
        .required("Password is required!")
        .max(15, "Maximum length 15 characters !"),
    }),
    onSubmit: async values => {
      try {
        const { email, password } = values;
        const user = await createUserWithEmailAndPassword(auth, email, password);

        await setDoc(doc(db, "users", user.user.uid), {});
        setFormState(prevState => {
          return { ...prevState, submited: true };
        });
      } catch (error) {
        if (error.message == "Firebase: Error (auth/email-already-in-use).") {
          setFormState(prevState => {
            return { ...prevState, error: "This email is already used by another user" };
          });
        } else {
          setFormState(prevState => {
            return { ...prevState, error: error.message };
          });
        }
      }
    },
  });

  return (
    <StyledContainer>
      <StyledForm>
        {!submited && (
          <>
            <h2>Divisionly</h2>
            {error && <p>{error}</p>}
            <FormControl
              text="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              type="email"
              name="email"
              onBlur={formik.handleBlur}
              error={formik.touched.email && formik.errors.email && formik.errors.email}
            />

            <FormControl
              text="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              type="password"
              name="password"
              id="password"
              onBlur={formik.handleBlur}
              error={
                formik.touched.password &&
                formik.errors.password &&
                formik.errors.password
              }
            />
            <Button text="Register" onClick={formik.handleSubmit} />
            <Link to="/login">Login</Link>
          </>
        )}
        {submited && <ThankYou />}
      </StyledForm>
    </StyledContainer>
  );
};

export default Register;
