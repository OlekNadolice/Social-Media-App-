import StyledSidebar, { UserContainer } from "./StyledChatSidebar";
import UserComponent from "./UserComponent";
import useGetMessages from "hooks/useGetMessages";
export const ChatSidebar = ({ setCurrentUser }) => {
  const messages = useGetMessages();
  console.log(messages);
  return (
    <StyledSidebar>
      <input placeholder="Search" />

      <UserContainer>
        <UserComponent setCurrentUser={setCurrentUser} />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
        <UserComponent />
      </UserContainer>
    </StyledSidebar>
  );
};
