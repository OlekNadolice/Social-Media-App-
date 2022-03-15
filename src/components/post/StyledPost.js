import styled from "styled-components";

export const StyledPost = styled.article`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 0 auto;
  color: #444;
  width: clamp(280px, 60vw, 600px);
  cursor: pointer;

  /* height: 150px; */
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  p {
    line-height: 1.4;
  }

  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: ${props => (props.negative ? "red" : "green")};

      font-weight: bold;
      font-size: 20px;
    }

    div {
      display: flex;
      align-items: center;
      gap: 5px;

      h1 {
        color: #ff6d33;
      }
    }

    img {
      border-radius: 50%;
      width: 60px;
      height: 60px;
      object-fit: cover;
    }
  }

  div {
    svg {
      font-size: 20px;
      cursor: pointer;
      color: #6057cc;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 7.5px;
  }
`;
