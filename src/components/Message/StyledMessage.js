import styled from "styled-components";

const StyledMessage = styled.div`
  background-color: ${props => (props.friend ? "#e1dcd8" : "#6055cc")};
  color: ${props => (props.friend ? "#444" : "#fff")};
  align-self: ${props => (props.friend ? "flex-start" : "flex-end")};
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  gap: 5px;

  img {
    border-radius: 50%;
    width: 25px;
    height: 25px;
    object-fit: cover;
  }
`;

export default StyledMessage;
