import { useSelector } from "react-redux";
import StyledMessage from "./StyledMessage";

export const Message = ({ id, body }) => {
  const { id: accountID } = useSelector(state => state.user);

  return (
    <StyledMessage friend={id}>
      {id && accountID != id && (
        <img src="https://api.time.com/wp-content/uploads/2014/03/happily-surprised.jpg" />
      )}
      <p>{body}</p>
    </StyledMessage>
  );
};
