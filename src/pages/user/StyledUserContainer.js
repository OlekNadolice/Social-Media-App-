import styled from "styled-components";

const StyledUserContainer = styled.div`
  display: grid;
  height: calc(100vh - 70px);
  grid-template-columns: 1fr 1fr 1fr;

  gap: 25px;
  padding: 30px;
  grid-template-rows: 60px auto auto;

  grid-template-areas:
    "Sidebar Header Header"
    "Sidebar Post Post"
    ". Post Post";

  @media (max-width: 760px) {
    height: auto;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "Sidebar Sidebar Sidebar"
      "Header Header Header"
      "Post Post Post";
  }
`;

export const StyledPostsContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  overflow-y: scroll;
  display: grid;
  justify-content: start;
  row-gap: 15px;
  grid-area: Post;
  padding: 10px 10px;
  overflow-y: scroll;
`;

export const StyledNavContainer = styled.div`
  /* background-color: #6057cc; */
  color: #6153cb;
  grid-area: Header;
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  /* border: 1px solid #6153cb; */
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  div {
    a {
      margin-left: 10px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;

export const StyledSideBar = styled.aside`
  /* max-width: 300px; */
  /* width: clamp(280px, 90% 350px); */
  display: flex;
  align-items: center;
  gap: 10px;
  height: fit-content;
  flex-direction: column;
  text-align: center;

  grid-area: Sidebar;
  word-break: break-word;
  justify-self: end;

  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;

  padding-bottom: 15px;
  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
  }

  h2 {
    color: #ff6d33;
  }

  section {
    height: 100%;
    padding: 0 10px;
    line-height: 1.2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 760px) {
    justify-self: center;
  }
`;

export default StyledUserContainer;
