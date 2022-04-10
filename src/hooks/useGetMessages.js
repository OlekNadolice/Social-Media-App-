import { useState, useEffect } from "react";
import { db } from "FirebaseDB/firebaseConfig";
import { query, where, getDocs, collection } from "firebase/firestore";
import { useSelector } from "react-redux";

const useGetMessages = () => {
  const [messages, setMessages] = useState([]);
  let mounted = true;
  const { id } = useSelector(state => state.user);
  useEffect(() => {
    if (mounted) {
      const dbRef = collection(db, "conversations");
      let Query = query(dbRef, where("users", "array-contains", `${id}`));

      const fetchMessages = async () => {
        try {
          const response = await getDocs(Query);

          const data = response.map(doc => doc.data());
          console.log(data);
          setMessages(data);
        } catch (err) {}
      };

      fetchMessages();
    }

    return () => (mounted = false);
  });

  return messages;
};

export default useGetMessages;
