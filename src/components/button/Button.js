import styled from "styled-components";

export const Button = ({
  text,
  onClick,
  height,
  width,
  color,
  backgroundColor,
  backgroundImage,
  children,
}) => {
  return (
    <StyledButton
      color={color}
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      width={width}
      height={height}
      onClick={onClick}
    >
      {text}
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || "30px"};
  width: ${props => props.width || " clamp(250px, 25vw, 300px)"};
  color: ${props => props.color || "#fff"};
  background-color: ${props => props.backgroundColor || "#6057cc"};
  background-image: ${props => props.backgroundImage || null};
  outline: none;
  cursor: pointer;
  border: none;

  svg {
    order: -1;
    margin-right: 10px;
    font-size: 22.5px;
  }
`;
