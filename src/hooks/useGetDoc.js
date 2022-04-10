import { useState, useEffect } from "react";
import { db } from "FirebaseDB/firebaseConfig";
import { getDoc, doc, getDocs, collection, query, where } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const useGetDoc = (reference, id) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const storage = getStorage();
  // const posts = collection(db, "posts");
  // const q = query(posts, where("author", "==", id));

  useEffect(() => {
    let componentMounted = true;
    let promises = [];

    if (componentMounted) {
      promises[0] = getDoc(doc(db, reference, id));
      promises[1] = getDownloadURL(ref(storage, id));
      // promises[2] = getDocs(q);

      Promise.all(promises)
        .then(result => {
          const data = result[0].data();
          const img = result[1];
          // const posts = result[2].docs.map(doc => doc.data());

          setData({ ...data, img });
        })
        .catch(err => setError(err))
        .finally(() => {
          setLoading(false);
        });
    }

    return () => (componentMounted = false);
  }, [id]);

  return { data, error, loading };
};

export default useGetDoc;
