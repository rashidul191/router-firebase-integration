import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app)

const Login = () => {
    // const {signInWithGoogle } = useFirebase()
    const [signInWithGoogle, user ] = useSignInWithGoogle (auth);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn= () =>{
        signInWithGoogle()
        .then(() =>{
            navigate(from, {replace: true})
        })
    }
  return (
    <div>
      <h4>Please Login Now</h4>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
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
