import styled from "styled-components";

const StyledNewPostCard = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: calc(100% - 70px);
  color: black;
  padding: 0 10px;

  ul {
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    gap: 10px;

    li {
      color: #fff;

      border: 1px solid #6056cc;
      color: #444;
      border-radius: 10px;
      padding: 5px 15px;
    }
  }

  textarea,
  input {
    resize: none;
    width: 90%;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  input {
    border: none;
    border-bottom: 2px solid #6057cc;
    padding-bottom: 2px;
  }

  textarea {
    height: 100px;
    border-color: #6056cc;
    padding: 5px;
  }

  label: {
    color: #444;
  }

  span {
    display: flex;
    gap: 10px;
  }

  button {
    background-color: #6057cc;

    color: #fff;
    border: none;
    height: 30px;
    width: 100px;
    cursor: pointer;
  }

  button:nth-of-type(1) {
    background-color: transparent;
    color: #6057cc;
    border: 1px solid #6057cc;
  }

  label {
    width: 90%;
    text-align: left;
    color: #444;
  }

  p {
    color: red;
  }
`;

export default StyledNewPostCard;
