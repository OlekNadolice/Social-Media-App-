import styled from "styled-components";
import { MdDone } from "react-icons/md";
import { Link } from "react-router-dom";
const ThankYou = () => {
  return (
    <StyledThankYou>
      <MdDone />
      <div>
        <h2>Thank You</h2>
        <p>Your account has been created</p>
        <Link to="/login">Click here to login</Link>
      </div>
    </StyledThankYou>
  );
};

export default ThankYou;

const StyledThankYou = styled.section`
  /* background-color: red; */
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  text-align: center;
  gap: 25px;

  svg {
    color: green;
    margin: 0 auto;
    border: 1px solid green;
    cursor: pointer;
    border-radius: 50%;
    display: block;
    height: 100px;
    width: 100px;
  }

  p {
    color: #444;
    font-size: clamp(16px, 7.5vw, 18px);
  }

  div {
    display: grid;
    gap: 7.5px;
  }
`;
