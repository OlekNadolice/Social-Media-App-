import { Link } from "react-router-dom";

const PromptSearchBar = ({ tags }) => {
  const forceRefresh = () => {
    window.forceRefresh();
  };
  return (
    <section>
      {tags.length > 0 &&
        tags.map(element => {
          return element.visible ? (
            <Link onClick={forceRefresh} to={`home/:${element.tag}`} key={element.tag}>
              {element.tag}
            </Link>
          ) : null;
        })}
    </section>
  );
};

export default PromptSearchBar;
