import styled from "styled-components";

const StyledWelcomePopUp = styled.section`
  display: flex;
  flex-direction: column;
  /* background-color: red; */
  justify-content: center;
  min-height: calc(100% - 60px);
  padding: 40px clamp(10px, 10vw, 100px);
  gap: 10px;
  text-align: center;
  align-items: center;

  h2 {
    color: #444;
  }

  img {
    height: 200px;
    width: 280px;
    object-fit: cover;
  }

  label {
    color: #444;
  }

  section {
    align-self: center;
    justify-self: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
`;

export const StyledFormStep = styled.span`
  border: 1px solid #6057cc;
  display: grid;
  place-content: center;
  padding: 20px;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  text-align: center;
  background-color: ${props => (props.active ? "#6057cc" : "transparent")};
  color: ${props => (props.active ? "#fff" : "#444")};
`;

export const StyledFormProgressBar = styled.span`
  background-color: ${props => (props.active ? "#6057cc" : "#676878")};
  height: 5px;
  width: calc((100% - (3 * 20px)) / 2);
`;

export default StyledWelcomePopUp;
