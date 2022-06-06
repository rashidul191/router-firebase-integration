import React from "react";
import useFirebase from "../hook/useFirebase";

const Login = () => {
    const {signInWithGoogle } = useFirebase()
  return (
    <div>
      <h4>Please Login Now</h4>
      <button onClick={signInWithGoogle}>Google Sign In</button>
      <p></p>

      <form>
        <input type="email" name="" placeholder="Enter email" /> <p></p>
        <input type="password" name="" placeholder="Enter password" /> <p></p>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
