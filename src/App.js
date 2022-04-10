import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Loading } from "components/index";
import { ProtectedRoute, PublicRoute } from "helpers/index";

const Home = lazy(() => import("pages/home/Home"));
const Login = lazy(() => import("pages/login/Login"));
const Register = lazy(() => import("pages/register/Register"));
const NotFound = lazy(() => import("pages/notFound/NotFound"));
const User = lazy(() => import("pages/user/User"));
const Chat = lazy(() => import("pages/Chat/Chat"));
const Landing = lazy(() => import("pages/Landing/Landing"));

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<PublicRoute element={<Landing />} />} />
            <Route path="/login" element={<PublicRoute element={<Login />} />} />
            <Route path="/register" element={<PublicRoute element={<Register />} />} />
            <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
            <Route path="/home/:tag" element={<ProtectedRoute element={<Home />} />} />
            <Route path="/chat" element={<ProtectedRoute element={<Chat />} />} />
            <Route path="/user/:id" element={<ProtectedRoute element={<User />} />} />
            <Route path="*" element={<ProtectedRoute element={<NotFound />} />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
