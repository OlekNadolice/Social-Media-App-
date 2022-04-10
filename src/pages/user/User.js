import { useParams } from "react-router-dom";
import PresentationalUser from "./PresentationalUser";
import { Loading } from "components/index";
import useGetDoc from "hooks/useGetDoc";
import useGetPosts from "hooks/useGetPosts";
import NotFound from "pages/notFound/NotFound";

const User = () => {
  const { id } = useParams();
  const { data: user, error, loading } = useGetDoc("users", id);
  const { posts } = useGetPosts(id);
  console.log(posts);

  if (user) {
    return <PresentationalUser posts={posts} id={id} data={user} />;
  }
  if (loading) {
    return <Loading loading={loading} />;
  }

  if (!user) {
    return <NotFound />;
  }
};

export default User;
