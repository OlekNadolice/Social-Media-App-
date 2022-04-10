import { useState, useEffect } from "react";

const useMediaQuery = query => {
  const Media = window.matchMedia(query);
  const [visible, setVisible] = useState(Media.matches);

  const listener = () => {
    setVisible(Media.matches);
  };

  useEffect(() => {
    window.addEventListener("resize", listener);

    return () => window.removeEventListener("resize", listener);
  });

  return visible;
};

export default useMediaQuery;
