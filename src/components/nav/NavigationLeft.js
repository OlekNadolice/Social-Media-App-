import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavigationLeft = () => {
  const { name, profileImage, id } = useSelector(state => state.user);

  return (
    <section>
      <Link to={`user/${id}`}>
        <img
          src={
            profileImage ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0eezZEdzm25YbJaAlB6tFjZQyipeAWHwf9Q&usqp=CAU"
          }
        />
      </Link>

      <h2>{name || "default"}</h2>
    </section>
  );
};

export default NavigationLeft;
