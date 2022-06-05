import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h4>Error!!! Sorry page not found</h4>
            <h1>404</h1>
            <Link to='/'>Back To Home</Link>
        </div>
    );
};

export default NotFound;