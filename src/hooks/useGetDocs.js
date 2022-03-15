import { useState, useEffect } from "react";
import { db } from "../FirebaseDB/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const useGetDocs = source => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const dbRef = collection(db, source);
    getDocs(dbRef)
      .then(response => {
        setData(response.docs.map(doc => doc.data()));
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return { data, error, loading };
};

export default useGetDocs;
