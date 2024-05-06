import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [update, setUpdate] = useState(false);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = {email: userEmail};
      setUser(currentUser);
      setLoading(false);
      if(currentUser){
        axios.post("https://car-doctor-server-roan-beta.vercel.app/jwt", loggedUser, {withCredentials: true})
        .then(res => {
          console.log(res.data)
        })
      }
      else{
         axios.post("https://car-doctor-server-roan-beta.vercel.app/logout", loggedUser, {withCredentials: true})
         .then(res => {
          console.log(res.data)
         })
      }
    });
    return () => {
      unSubscribe();
    };
  }, [update]);
  const logOut = () => {
    return signOut(auth);
  };

  const userInfo = {
    createUser,
    signIn,
    user,
    logOut,
    loading,
    setLoading,
    update,
    setUpdate,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
