import { useState } from "react";
import { Message, MessageInput, ChatSidebar } from "components/index";
import StyledChat, { Container, Grid } from "./StyledChat";
import useMediaQuery from "hooks/useMediaQuery";
import MobileChat from "./MobileChat";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const visible = useMediaQuery("(min-width:800px)");

  if (visible) {
    return (
      <Grid>
        <ChatSidebar />
        <Container>
          <StyledChat>
            <Message body="Elo" id="22233" />
            <Message body="Czesc" />
            <Message body="Co tam u Ciebie" />
            <Message id="222" body="U mnie nic xD" />
            <Message body="U mnie w sumie tez" />
            <Message id="222" body="No to spoko" />
            <Message body="No taa" />
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
          </StyledChat>
          <MessageInput />
        </Container>
      </Grid>
    );
  } else {
    return <MobileChat />;
  }
};

export default Chat;
