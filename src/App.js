import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Register, Home, NotFound, User } from "pages/index";
import { Navbar } from "components/index";
import { ProtectedRoute, PublicRoute } from "helpers/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/login" element={<PublicRoute element={<Login />} />} />
          <Route path="/register" element={<PublicRoute element={<Register />} />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/users/:id" element={<ProtectedRoute element={<User />} />} />
          <Route path="*" element={<ProtectedRoute element={<NotFound />} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
