import React from "react";
import styled from "styled-components";

const UserComponent = ({ setCurrentUser }) => {
  return (
    <StyledUser onClick={() => setCurrentUser(true)}>
      <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <div>
        <h3>Czarek</h3>
        <p>Mialem dzisiaj przyjechac...</p>
      </div>
    </StyledUser>
  );
};

const StyledUser = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  border-bottom: 1px solid;
  height: 100px;
  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export default UserComponent;
