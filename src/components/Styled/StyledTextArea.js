import styled from "styled-components";

export const StyledTextArea = styled.textarea`
  resize: none;
  width: clamp(250px, 35vw, 600px);
  height: 150px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  margin-bottom: 10px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
