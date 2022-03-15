import { StyledPost } from "./StyledPost";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";

export const Post = ({ author, description, img, likes, negative }) => {
  return (
    <StyledPost negative={negative}>
      <section>
        <div>
          <img src={img} />
          <h1>{author}</h1>
        </div>
        <span>{likes}</span>
      </section>
      <p>{description}</p>
      <ul>
        <li>#life</li>
        <li>#addiction</li>
      </ul>

      <div>
        <AiOutlineDislike />
        <AiOutlineLike />
      </div>
    </StyledPost>
  );
};
