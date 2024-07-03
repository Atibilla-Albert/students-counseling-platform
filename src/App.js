
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route,useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import SignIn from "./firebase/SignIn";
import SignUp from "./firebase/SignUp";
import Home from "./pages/Home"
import LiveChat from "./components/LiveChat";
import { auth } from "./firebase/firebase"; 

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livechat" element={<LiveChat user={user} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
