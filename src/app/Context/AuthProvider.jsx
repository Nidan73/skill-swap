import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";
const AuthProvider = ({ children }) => {
  //   console.log(auth);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (createdUser) => {
      console.log(createUser);
      setUser(createdUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userDetails = {
    userLogin,
    createUser,
    user,
    logOut,
    setUser,
    loading,
  };
  return <AuthContext value={userDetails}>{children}</AuthContext>;
};

export default AuthProvider;
