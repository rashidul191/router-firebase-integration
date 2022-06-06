import React from 'react';

const Register = () => {
    return (
        <div>
            <h4>Please Register Now !!</h4>

            <form >
                <input type="text" name='' placeholder='Enter Your name' /> <p></p>
                <input type="email" name='' placeholder='Enter email' /> <p></p>
                <input type="password" name='' placeholder='Enter password' /> <p></p>
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;