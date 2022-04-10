import React from "react";
import styled from "styled-components";
import { PacmanLoader } from "react-spinners/";
import { ClipLoader } from "react-spinners/";

export const Loading = ({ loading, height }) => {
  return (
    <StyledLoading height={height}>
      <ClipLoader loading={loading} size="60px" color="#6154cb" />
    </StyledLoading>
  );
};

const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.height || "calc(100vh - 70px)"};
`;
