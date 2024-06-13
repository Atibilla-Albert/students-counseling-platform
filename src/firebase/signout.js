// // SignOut.js
// import React from 'react';
// import { useHistory } from 'react-router-dom';

// const SignOut = ({ onSignOut }) => {
//   const history = useHistory();

//   const handleSignOut = () => {
//     // Clear authentication tokens or any other sign-out logic
//     localStorage.removeItem('authToken');
    
//     // Notify parent component or context about sign-out
//     if (onSignOut) {
//       onSignOut();
//     }

//     // Redirect to sign-in page or home page
//     history.push('/signin');
//   };

//   return (
//     <button onClick={handleSignOut}>Sign Out</button>
//   );
// };

// export default SignOut;
