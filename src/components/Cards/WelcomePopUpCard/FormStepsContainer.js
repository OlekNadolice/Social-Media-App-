import { StyledFormStep, StyledFormProgressBar } from "./StyledWelcomePopUp";
import { useSelector } from "react-redux";
import { MdDone } from "react-icons/md";
import styled from "styled-components";

const FormStepsContainer = () => {
  const { currentStep } = useSelector(state => state.StepForm);

  const cases = {
    firstCase: currentStep > 1,
    secondCase: currentStep > 2,
    thirdCase: currentStep > 3,
    fourthCase: currentStep > 4,
  };

  const { firstCase, secondCase, thirdCase, fourthCase } = cases;

  return (
    <StyledSection>
      <StyledFormStep active={firstCase}>{firstCase ? <MdDone /> : 1} </StyledFormStep>
      <StyledFormProgressBar active={firstCase} />
      <StyledFormStep active={secondCase}>{secondCase ? <MdDone /> : 2}</StyledFormStep>
      <StyledFormProgressBar active={secondCase} />
      <StyledFormStep active={thirdCase}>{thirdCase ? <MdDone /> : 3}</StyledFormStep>
      <StyledFormProgressBar active={thirdCase} />
      <StyledFormStep active={fourthCase}>{fourthCase ? <MdDone /> : 4}</StyledFormStep>
    </StyledSection>
  );
};

const StyledSection = styled.section`
  margin-bottom: 25px;
`;

export default FormStepsContainer;
