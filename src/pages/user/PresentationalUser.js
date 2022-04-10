import { useSelector } from "react-redux";

import StyledUserContainer, {
  StyledSideBar,
  StyledPostsContainer,
  StyledNavContainer,
} from "./StyledUserContainer";
import { Post, Button } from "components/index";
import anon from "images/anon.jpg";

const PresentationalUser = props => {
  const { name, description, follows, followers, img } = props.data;
  // const { posts } = props.posts;
  const { id } = useSelector(state => state.user);

  return (
    <StyledUserContainer>
      <StyledSideBar>
        <img src={img || anon} />
        <section>
          <h2>{name}</h2>
          <p>{description}</p>
          <span>
            <p>Posts</p>
            <p>106</p>
          </span>
          <span>
            <p>Follows</p>
            <p>{follows || 0}</p>
          </span>
          <span>
            <p>Followers</p>
            <p>{followers || 0}</p>
          </span>

          {props.id !== id && <Button width="200px" text="Follow" borderRadius="10px" />}
        </section>
      </StyledSideBar>

      <StyledNavContainer>
        <div>
          <a>Tweets</a>
          <a>Photos</a>
        </div>
      </StyledNavContainer>

      <StyledPostsContainer>
        {props.posts && props.posts.length > 0 ? (
          props.posts.map(post => {
            return (
              <Post
                // id={post.author}
                key={name + post.created.seconds}
                author={name}
                description={post.body}
                likes={post.likes.length}
                negative={post.dislikes.length}
                img={img}
                tags={post.tags}
              />
            );
          })
        ) : (
          <div>0 Posts</div>
        )}
      </StyledPostsContainer>
    </StyledUserContainer>
  );
};

export default PresentationalUser;
