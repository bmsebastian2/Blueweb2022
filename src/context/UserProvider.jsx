import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);

  const logingUser = (
    email,
    password //PERMITE LOGEAR USUARIO
  ) => signInWithEmailAndPassword(auth, email, password);

  const registerUser = (
    email,
    password //PERMITE REGISTRAR USUARIO
  ) => createUserWithEmailAndPassword(auth, email, password);

  const logoutUser = () => signOut(auth); //PERMITE DAR SALIDA AL USUARIO

  useEffect(() => {
    const onSubcribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { email, photoURL, displayName, uid } = user;
        setUser({ email, photoURL, displayName, uid });
      } else {
        setUser(null);
      }
    });
    return () => onSubcribe();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, logingUser, logoutUser, registerUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
