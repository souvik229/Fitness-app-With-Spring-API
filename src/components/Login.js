
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

// function Login() {
//     const responseMessage = (response) => {
//         console.log(response);
//     };
//     const errorMessage = (error) => {
//         console.log(error);
//     };
//     return (
//         <div>
//             <h2>React Google Login</h2>
//             <br />
//             <br />
//             <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
//         </div>
//     )
// }


function Login({ handleLogin }) {


    const responseMessage = (response) => {
      console.log(response.credential);
      handleLogin(response);
    };
  
    const errorMessage = (error) => {
      console.log(error);
    };
  
    return (
      <div>
        <h2>Google Login</h2>
        <br />
        <br />
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Login with Google"
          onSuccess={responseMessage}
          onFailure={errorMessage}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    );}
export default Login;