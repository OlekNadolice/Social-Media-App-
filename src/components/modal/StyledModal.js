import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  min-height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  display: grid;
  place-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  cursor: pointer;

  div:nth-of-type(1) {
    width: clamp(300px, calc(70vw + 40px), 600px);
    height: 450px;
    overflow-y: scroll;
    background-color: #fff;
    border-radius: 10px;
    color: #fff;

    header {
      height: 60px;
      background-color: #6057cc;
      display: flex;
      justify-content: space-between;
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      z-index: 5;
      align-items: center;

      svg {
        cursor: pointer;
        font-size: 25px;
        margin-right: 10px;
      }

      h3 {
        margin: 0 auto;
      }
    }
  }
`;

export default StyledModal;
