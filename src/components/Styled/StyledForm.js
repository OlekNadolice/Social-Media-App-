import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  gap: 10px;
  color: #444;
  width: clamp(300px, 70vw, 450px);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-radius: 5px;

  h2 {
    font-size: clamp(20px, calc(15vw - 10px), 55px);
    color: #5e60ce;
  }

  span {
    text-decoration: none;
    display: block;
    color: #fff;

    background-image: linear-gradient(45deg, #5390d9, #4ea8de);
    width: clamp(250px, 25vw, 300px);
    height: 30px;
    display: grid;
    place-items: center;

    a {
      color: #fff;
    }
  }

  p {
    color: red;
    font-size: 14px;
    margin-top: -5px;
  }
`;
