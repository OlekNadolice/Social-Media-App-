import { Button } from "components/index";
import { useDispatch, useSelector } from "react-redux";
import { validateFirstStep } from "store/StepFormSlice";
const FirstStep = () => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(state => state.StepForm);

  return (
    <>
      <h2>Here you can change your account settings.</h2>
      <Button text="Continue" onClick={() => dispatch(validateFirstStep())} />
    </>
  );
};

export default FirstStep;
