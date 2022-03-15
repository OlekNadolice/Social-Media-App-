import { useSelector, useDispatch } from "react-redux";
import { FormControl, Button } from "components/index";
import { validateSecondStep, oneStepBackwards } from "store/StepFormSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
const SecondStep = () => {
  const { currentStep, name, age } = useSelector(state => state.StepForm);
  const { name: userName, age: userAge } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: name || userName,
      age: age || userAge,
    },

    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Name Field is Required")
        .min(3, "Minimum length 3 characters")
        .max(20, "Maximum is 15 characters"),

      age: Yup.date()
        .required("Date Field is Required")
        .max(new Date(Date.now()), "Invalid Date "),
    }),

    onSubmit: () => {
      dispatch(
        validateSecondStep({ name: formik.values.firstName, age: formik.values.age })
      );
    },
  });

  return (
    <>
      <FormControl
        text="Enter Your Name"
        type="text"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        id="firstName"
        name="firstName"
        error={formik.touched.firstName && formik.errors.firstName}
        onBlur={formik.handleBlur}
      />
      <FormControl
        id="age"
        name="age"
        value={formik.values.age}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        text="When is your birthday"
        type="date"
        error={formik.touched.age && formik.errors.age}
      />
      <Button onClick={formik.handleSubmit} text="Continue" />
      <Button onClick={() => dispatch(oneStepBackwards(1))} text="Back" />
    </>
  );
};

export default SecondStep;
