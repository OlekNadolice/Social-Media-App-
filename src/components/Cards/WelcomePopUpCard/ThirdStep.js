import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useRef, useState } from "react";

import { validateThirdStep, oneStepBackwards } from "store/StepFormSlice";
import { Button, FormControl } from "components/index";
import image from "images/anon.jpg";

const ThirdStep = () => {
  const { profileImage: formProfileImage } = useSelector(state => state.StepForm);
  const { profileImage } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const maxFileSize = 2000000;
  const fileTypes = ["image/jpeg", "image/jpg"];
  const reader = new FileReader();
  const inputRef = useRef();
  const [img, setImg] = useState(formProfileImage || profileImage || image);

  const formik = useFormik({
    initialValues: {
      file: img,
    },
    validationSchema: Yup.object({
      file: Yup.mixed()
        .test("fileType", "Unsupported file format", value => {
          return fileTypes.includes(inputRef.current.files[0].type);
        })
        .test("fileSize", "File is too large", value => {
          return inputRef.current.files[0].size <= maxFileSize;
        }),
    }),
    onSubmit: () => {
      dispatch(validateThirdStep(img));
    },
  });

  return (
    <>
      <img src={img} />
      <FormControl
        type="file"
        text="Change  your profile Image"
        name="file"
        id="file"
        accept={"image/*"}
        onChange={e => {
          formik.handleChange(e);

          const file = e.target.files[0];

          reader.onload = () => {
            setImg(reader.result);
          };
          reader.readAsDataURL(file);
        }}
        error={formik.touched.file && formik.errors.file}
        display="none"
        onBlur={formik.handleBlur}
        ref={inputRef}
      />
      <Button type="submit" text="Continue" onClick={formik.handleSubmit} />
      <Button text="Back" onClick={() => dispatch(oneStepBackwards(2))} />
    </>
  );
};

export default ThirdStep;
