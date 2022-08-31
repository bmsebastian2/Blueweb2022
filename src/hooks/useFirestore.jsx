import React from "react";
import { useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";

export const apiStates = {
  LOADING: "LOADING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const useFirestore = (nameCollection) => {
  const [data, setData] = useState({
    state: apiStates.LOADING,
    error: "",
    data: [],
  });
  const setPartData = (partialData) => setData({ ...data, ...partialData });

  React.useEffect(() => {
    console.log("getData");
    getData();
  }, []);

  const getData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, nameCollection));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setPartData({ state: apiStates.SUCCESS, data });
    } catch (error) {
      setPartData({ state: apiStates.ERROR, error: error.message });
    }
  };

  return data;
};
