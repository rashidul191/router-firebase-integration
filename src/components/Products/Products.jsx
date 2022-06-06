import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
import useFirebase from '../hook/useFirebase';


const auth = getAuth(app)
const Products = () => {
    // const {user} = useFirebase()

    const [user] = useAuthState(auth)
    return (
        <div>
            <h3>Knock Knock ! Who is</h3>
           <h4>{user?.uid ?user.displayName: "vooooooooood"}</h4>

        </div>
    );
};

export default Products;