import StyledWelcomePopUp from "./StyledWelcomePopUp";
import { Modal } from "components/index";
import FirstStep from "./FirstStep";
import FormStepsContainer from "./FormStepsContainer";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import FourthStep from "./FourthStep";
import { useSelector } from "react-redux";

export const WelcomePopUp = ({ isOpen, setIsOpen }) => {
  const { currentStep } = useSelector(state => state.StepForm);
  if (isOpen) {
    return (
      <Modal setIsOpen={setIsOpen} title="Account Settings">
        <StyledWelcomePopUp>
          <FormStepsContainer />
          {currentStep === 1 ? <FirstStep /> : null}
          {currentStep === 2 ? <SecondStep /> : null}
          {currentStep === 3 ? <ThirdStep /> : null}
          {currentStep === 4 ? <FourthStep /> : null}
        </StyledWelcomePopUp>
      </Modal>
    );
  } else {
    return null;
  }
};
