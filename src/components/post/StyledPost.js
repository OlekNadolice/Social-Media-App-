import styled from "styled-components";

export const animationVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },

  exit: {
    opacity: 0,
    scale: 0,
  },

  transition: {
    duration: 0.6,
  },
};

export const StyledPost = styled.article`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  margin: 0 auto;
  color: #444;
  width: ${props => props.width || "clamp(280px, 60vw, 600px)"};
  cursor: pointer;

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
      color: ${props => props.color || "#444"};

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
      width: 45px;
      height: 45px;
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
