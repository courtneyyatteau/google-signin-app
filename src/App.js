import React, { useState } from "react";
import "./App.css";
import "animate.css";
import { authentication } from "./Firebase/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider)
      .then((re) => {
        console.log(re);
        setUserLoggedIn(true);
        const name = re.user.displayName;
        const email = re.user.email;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  function logOut() {
    signOut(authentication).then((re) => {
      setUserLoggedIn(false);
      localStorage.clear();
      console.log("logged out!");
    });
  }

  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  if (userLoggedIn) {
    return (
      <div>
        <h1>{name}</h1>
        <h1>{email}</h1>
        <button onClick={logOut}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div className="App">
        <button onClick={signInWithGoogle}>Sign In with Google</button>
      </div>
    );
  }
}

export default App;
