import styled from "styled-components";

const StyledMessageInput = styled.div`
  background-color: #f1f3f4;
  padding: 30px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  bottom: 0;
  right: 0;
  left: 0;
  height: 100px;
  width: 100%;

  section {
    display: flex;
    gap: 5px;
    height: 100%;

    input {
      display: none;
    }

    svg {
      position: relative;
      cursor: pointer;
      color: #6153cb;
      font-size: 25px;
    }
  }

  input {
    border: none;
    background-color: transparent;
    flex-basis: 80%;
  }

  input:focus {
    outline: none;
  }
`;

export default StyledMessageInput;
