import styled from "styled-components";

const StyledSearchBar = styled.div`
  display: flex;
  width: ${props => props.width};
  justify-content: space-between;
  padding: 0 5px;
  position: relative;

  input {
    flex-basis: 90%;
  }

  section {
    padding: 5px;
    border: 1px solid;
    position: absolute;
    background-color: white;
    color: #6154cb;
    top: 30px;
    width: 100%;
    left: 0;
    right: 0;
    height: 120px;
    overflow-y: scroll;
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    a {
      cursor: pointer;
      width: 100%;
      color: #6155cb;
    }

    a:hover {
      background-color: #6154cb;
      color: #fff;
    }
  }
`;

export default StyledSearchBar;
