import styled from "styled-components";

const StyledHomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  height: calc(100vh - 70px);
  overflow-y: scroll;

  div {
    height: 100%;
  }
`;

export const StyledContainerForPosts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  overflow-y: scroll;
  padding: 20px 0;
`;

export default StyledHomeDiv;
