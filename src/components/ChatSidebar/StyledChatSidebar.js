import styled from "styled-components";

const StyledSidebar = styled.aside`
  background-color: #ebf4fb;
  color: #6349c9;
  overflow-y: scroll;
  height: calc(100vh - 70px);

  input {
    border-radius: 10px;
    outline: none;
    height: 30px;
    padding-left: 5px;
    border: none;
    width: clamp(180px, 80%, 220px);
  }
`;

export default StyledSidebar;

export const UserContainer = styled.div`
  display: grid;
  gap: 10px;
  /* background: red; */
`;
