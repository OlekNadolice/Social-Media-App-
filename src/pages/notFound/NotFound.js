import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaRegSadCry } from "react-icons/fa";
import { Button } from "components/index";

const NotFound = () => {
  const { name } = useSelector(state => state.user);

  return (
    <StyledNotFound>
      <section>
        <h3>404</h3>
        <FaRegSadCry />
      </section>
      <p>{name}, the page that you currently looking for is not found.</p>

      <Button width={"clamp(14px, 15vw, 200px)"}>
        <Link to="/home"> Go back</Link>
      </Button>
    </StyledNotFound>
  );
};

const StyledNotFound = styled.div`
  min-height: calc(100vh - 70px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;

  a {
    color: #fff;
    width: 100%;
  }

  section {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  svg {
    font-size: 80px;
    color: #663fc6;
  }

  p {
    color: #222222;
    font-size: clamp(16px, 10vw, 22.5px);
    line-height: 1.1;
  }

  h3 {
    color: #663fc6;
    font-size: clamp(20px, 20vw, 100px);
    letter-spacing: 2px;
  }
`;

export default NotFound;
