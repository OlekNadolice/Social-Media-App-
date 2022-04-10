import styled from "styled-components";

const StyledModal = styled.div`
  div:nth-of-type(1) {
    width: clamp(300px, calc(70vw + 40px), 600px);
    height: ${props => props.height || "450px"};
    overflow-y: scroll;
    background-color: #fff;
    border-radius: 10px;
    color: #fff;

    header {
      height: ${props => props.headerHeight || "60px"};
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
