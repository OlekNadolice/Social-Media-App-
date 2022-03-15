import styled from "styled-components";
import { forwardRef } from "react";

export const FormControl = forwardRef((props, ref) => {
  const { display, text, type, onChange, error, value, id, name, onBlur, accept } = props;
  return (
    <>
      <StyledLabel htmlFor={id}>{text}</StyledLabel>
      <StyledFormControl
        autoComplete="new-password"
        value={value}
        type={type || "text"}
        onChange={onChange}
        id={id}
        name={name}
        onBlur={onBlur}
        error={error}
        display={display}
        ref={ref}
        accept={accept}
      />
      {error && <StyledErrorParagraph>{error}</StyledErrorParagraph>}
    </>
  );
});

const StyledLabel = styled.label`
  color: black;
`;

const StyledErrorParagraph = styled.p`
  color: red;
`;

const StyledFormControl = styled.input`
  height: 30px;
  width: clamp(250px, 25vw, 300px);
  border: 1px solid;
  border-color: ${props => (props.error ? "red" : null)};
  cursor: pointer;
  display: ${props => props.display};

  &:focus {
    border-color: #6930c3;
    outline: none;
  }
`;
