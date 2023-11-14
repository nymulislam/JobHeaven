import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import axios from "axios";

const auth = getAuth(app);

export const AuthContext = createContext(null);

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = (email, password, name) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      console.log("user state changed", currentUser);
      setUser(currentUser);
      setLoading(false);

      // JWT Token
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedUser, {
            withCredentials: true,
            credentials: "include",
          })
          .then((res) => {
            console.log("token response", res.data);
          })
          .catch((error) => {
            console.error("Error fetching token:", error);
          });
      } else {
        axios.post("http://localhost:5000/logout", loggedUser, {
          withCredentials: true
        })
        .then(res => {
          console.log(res.data);
        })
      }
    });
    return () => {
      unsubscribe();
    };
  });

  const userinfo = {
    user,
    loading,
    createUser,
    googleSignin,
    signin,
    logout,
  };

  return (
    <AuthContext.Provider value={userinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
