import { Post } from "components/index";
import StyledHomeDiv from "./StyledHome";

export const Home = () => {
  return (
    <>
      <StyledHomeDiv>
        <Post
          img="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          author="Marcin"
          description="I dont know how can i stop eating junk food"
          likes="+ 44"
        />
        <Post
          img="https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8MHx8&w=1000&q=80"
          author="Elizabeth"
          description="I have a fucking depression, what should i do, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum dolor sit amet,lorem ipsum, lorem ipsum, lorem ipsum, lorem ips, lorem ipsum, lorem ipsum, lorem ips, lorem ipsum, lorem ipsum, lorem ips , lorem ipsum, lorem"
          likes="+ 101"
        />
        <Post
          img="https://i.pinimg.com/originals/57/e0/5b/57e05b767655c8b617f926c7070a5a51.jpg"
          author="Jake"
          description="I'm a handsome guy"
          likes="- 50"
          negative="negative"
        />
      </StyledHomeDiv>
    </>
  );
};
