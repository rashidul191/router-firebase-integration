import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";
import useFirebase from "../hook/useFirebase";
import "./Header.css";


const auth = getAuth(app)

const Header = () => {
//   const { user, handleSignOut } = useFirebase();
const [user, loading, error]  = useAuthState(auth)
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/review">Review</Link>
      <Link to="/register">Register</Link>
      <span>{user?.uid && user.displayName}</span>
      {user?.uid ? <button onClick={()=> signOut(auth)}>Sign Out</button> : <Link to="/login">Login</Link>}
    </nav>
  );
};

export default Header;
