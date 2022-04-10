import { useState } from "react";
import { Post } from "components/index";
import StyledHomeDiv, { StyledContainerForPosts } from "./StyledHome";
import useGetPosts from "hooks/useGetPosts";
import { Loading } from "components/index";
import { useParams } from "react-router-dom";

import { motion } from "framer-motion";

const Home = () => {
  const [skip, setSkip] = useState("");
  const { tag } = useParams();
  const { posts, error, loading, setPosts } = useGetPosts(null, skip, tag);

  const handleScroll = event => {
    const { scrollTop, scrollTopMax } = event.target;
    if (scrollTop === scrollTopMax) {
      setSkip(posts[posts.length - 1].created);
    }
  };

  if (loading && posts.length === 0) {
    return <Loading loading={loading}></Loading>;
  }

  return (
    <>
      <StyledHomeDiv>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <StyledContainerForPosts onScroll={handleScroll}>
            {posts.map(post => {
              return (
                <Post
                  setPosts={setPosts}
                  key={post.author + Math.floor(Math.random() * 600000000)}
                  author={post.authorName || "noname"}
                  description={post.body}
                  likes={post.likes}
                  dislikes={post.dislikes}
                  tags={post.tags}
                  img={post.img}
                  id={post.author}
                  postID={post.postID}
                />
              );
            })}

            {loading && posts && <Loading height="60px" />}
          </StyledContainerForPosts>
        </motion.div>
      </StyledHomeDiv>
    </>
  );
};

export default Home;
