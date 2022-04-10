import styled from "styled-components";

const StyledChat = styled.div`
  display: flex;
  position: relative;
  padding: 20px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;

  width: 100%;

  gap: 15px;
  height: 80%;
  overflow-y: scroll;
`;

export const Container = styled.div`
  height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  /* width: clamp(780px, 80%, 1200px); */
  max-width: 1200px;
  width: 80%;
  /* box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px; */
  /* background-color: red; */
  gap: 10px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 220px clamp(400px, 70%, 1000px);
`;

export default StyledChat;
