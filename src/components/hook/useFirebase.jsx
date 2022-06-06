import { useEffect, useState } from "react";
import app from "../../firebase.init";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});

  // Google Sign In
  const signInWithGoogle = () => {
    // console.log("sign in soon");
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  // Sing out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User Sign Out");
        setUser({});
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  //   return [user, setUser]
  return { user, signInWithGoogle, handleSignOut };
};

export default useFirebase;
