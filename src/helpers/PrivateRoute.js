import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useSelector(state => state.user);
  if (isLoggedIn) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};
