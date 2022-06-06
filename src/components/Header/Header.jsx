import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../hook/useFirebase";
import "./Header.css";
const Header = () => {
  const { user, handleSignOut } = useFirebase();
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/review">Review</Link>
      <Link to="/register">Register</Link>
      <span>{user?.uid && user.displayName}</span>
      {user?.uid ? <button onClick={handleSignOut}>Sign Out</button> : <Link to="/login">Login</Link>}
    </nav>
  );
};

export default Header;
