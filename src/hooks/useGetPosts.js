import { useState, useEffect } from "react";
import { db } from "FirebaseDB/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  orderBy,
  getDoc,
  doc,
  limit,
  startAfter,
} from "firebase/firestore";

import { getStorage, ref, getDownloadURL } from "firebase/storage";

const useGetPosts = (id, skip, tag) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const storage = getStorage();
  useEffect(() => {
    let mounted = true;
    let tag2 = tag?.split(":")[1];
    console.log(tag2);
    if (mounted) {
      const postsReference = collection(db, "posts");
      let Query;

      if (id) {
        Query = query(
          postsReference,
          where("author", "==", id),
          orderBy("created", "desc"),
          startAfter(skip),
          limit(4)
        );
      } else {
        tag
          ? (Query = query(
              postsReference,
              where("tags", "array-contains", tag2),
              orderBy("created", "desc"),
              startAfter(skip),
              limit(4)
            ))
          : (Query = query(
              postsReference,

              orderBy("created", "desc"),
              startAfter(skip),
              limit(4)
            ));
      }

      const fetchPosts = async () => {
        try {
          const response = await getDocs(Query);

          const data = response.docs.map(doc => doc.data());

          data.forEach((element, index) => {
            element.postID = response.docs[index].id;
          });

          if (id) {
            setPosts(prevState => [...prevState, ...data]);
            return;
          }

          const promisesForNames = await Promise.all(
            data.map(element => {
              return getDoc(doc(db, "users", element.author));
            })
          );

          const promisesForImages = await Promise.all(
            data.map(element => {
              return getDownloadURL(ref(storage, element.author));
            })
          );

          const authorNames = promisesForNames.map(element => {
            const { name } = element.data();
            return name;
          });

          promisesForImages.forEach((image, index) => {
            data[index].img = image;
          });

          authorNames.forEach((name, index) => {
            data[index].authorName = name;
          });

          setPosts(prevState => [...prevState, ...data]);
        } catch (err) {
          setError(err);
        }
        setLoading(prevState => !prevState);
      };

      fetchPosts();
    }
    return () => {
      mounted = false;
    };
  }, [id, skip, tag]);

  return { posts, loading, error, setPosts };
};

export default useGetPosts;
