import React from "react";

const TagsContainer = ({ tags, setTags }) => {
  if (tags.length > 0) {
    return (
      <ul>
        {tags.map(e => {
          return (
            <li
              onClick={() =>
                setTags(prevState => prevState.filter(element => element !== e))
              }
              key={e}
            >
              {e}
            </li>
          );
        })}
      </ul>
    );
  } else {
    return null;
  }
};

export default TagsContainer;
