import React from "react";
import styled from "styled-components";
const Backdrop = ({ children }) => {
  return <StyledBackdrop>{children}</StyledBackdrop>;
};

export default Backdrop;

const StyledBackdrop = styled.div`
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
`;
