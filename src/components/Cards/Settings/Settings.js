import StyledSettings from "./StyledSettings";
import { Modal } from "components/index";
import FormStepsContainer from "./MultiStepsForm/FormStepsContainer";

import FirstStep from "./MultiStepsForm/FirstStep";
import SecondStep from "./MultiStepsForm/SecondStep";
import ThirdStep from "./MultiStepsForm/ThirdStep";
import FourthStep from "./MultiStepsForm/FourthStep";

import { useSelector } from "react-redux";

export const WelcomePopUp = ({ isOpen, setIsOpen }) => {
  const { currentStep } = useSelector(state => state.StepForm);
  if (isOpen) {
    return (
      <Modal setIsOpen={setIsOpen} title="Account Settings">
        <StyledSettings>
          <FormStepsContainer />
          {currentStep === 1 ? <FirstStep /> : null}
          {currentStep === 2 ? <SecondStep /> : null}
          {currentStep === 3 ? <ThirdStep /> : null}
          {currentStep === 4 ? <FourthStep setIsOpen={setIsOpen} /> : null}
        </StyledSettings>
      </Modal>
    );
  } else {
    return null;
  }
};
