import React, { useState, useEffect } from 'react';
import { BrowserRouter,Routes, Route,Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Auth from "./firebase/auth";
import LiveChat from "./components/LiveChat";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../src/firebase/firebase'


function App() {
  const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/auth" element={<Auth setUser={setUser} />} />
        <Route path="/" element={user ? <Home user={user} setUser={setUser} /> : <Navigate to="/auth" />} />
        <Route path="/livechat" element={<LiveChat/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
