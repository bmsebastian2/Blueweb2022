import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, doc, getDocs } from "firebase/firestore";

export const useApi = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    console.log("usesefefct");
    getData();
  }, []);

  const getData = async () => {
    try {
      setLoading(true);
      const querySnapshot = await getDocs(collection(db, url));
      const dataDb = querySnapshot.docs.map((doc) => doc.data());
      setData(dataDb);
    } catch (error) {
      setError(error);
    } finally {
    }
  };

  return { data, error, loading };
};
// const querySnapshot = getDocs(collection(db, url));
