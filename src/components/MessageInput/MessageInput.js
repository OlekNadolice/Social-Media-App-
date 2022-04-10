import { useState } from "react";
import StyledMessageInput from "./StyledMessageInput";
import { AiOutlineSend } from "react-icons/ai";
import EmoiPicker from "./EmoiPicker";
import { BsEmojiLaughing, BsImage } from "react-icons/bs";

export const MessageInput = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [message, setMessage] = useState("");

  const openPicker = () => {
    setIsPickerOpen(prevState => !prevState);
  };

  return (
    <StyledMessageInput>
      <input
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder="Type a message"
        type="text"
      />
      <section>
        <label htmlFor="file">
          <BsImage />
        </label>
        <input type="file" id="file" name="file" />
        <BsEmojiLaughing onClick={openPicker} />
        <AiOutlineSend />
      </section>
      {isPickerOpen && (
        <EmoiPicker setMessage={setMessage} setIsPickerOpen={setIsPickerOpen} />
      )}
    </StyledMessageInput>
  );
};
