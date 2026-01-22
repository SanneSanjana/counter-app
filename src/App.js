

// import Counter from "./components/Counter/counter.js";

// function App() {
//   return (
//     <div>

//       <Counter />
//     </div>
//   );
// }

// import {useState} from 'react'

// // import Welcome from './components/Welcome'

// import'./App.css'

// const App = () => {

// const [isLoggedIn, setIsLoggedIn] = useState(true)

// // const changeState = () => {

// // setlsLoggedIn(!isLoggedin)

// let authButton

// if (isLoggedIn === true) {

// authButton= <button>Logout</button>

// } else {



// authButton = <button>Login</button>
// }

// return (

// <div className="container">

// <h1>Hello, User</h1>

// {authButton}

// </div>
// )}

// export default App;

// import { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   const changeState = () => {
//     setIsLoggedIn(!isLoggedIn);
//   };

//   let authButton;

//   if (isLoggedIn === true) {
//     authButton = <button onClick={changeState}>Logout</button>;
//   } else {
//     authButton = <button onClick={changeState}>Login</button>;
//   }

//   return (
//     <div className="container">
//       <h1>Hello, User</h1>
//       {authButton}
//     </div>
//   );
// };

// export default App;




// import "./App.css";
// import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

// const App = () => {
 
//   return (
//     <div className="container">
//       <h1>Hello, User</h1>

//     <VideoPlayer/>
//     </div>
//   );
//  };
//  export default App; 

import "./App.css";
import UserListPlayer from "./components/Users/UserListPlayer";

const App = () => {
  return (
    <div>
    
      <UserListPlayer />
      </div>
  );
};

export default App;
