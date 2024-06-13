import Navbar from "../components/navbar";
import About from "../components/About";
import Info from "../components/Info";
import Hero from "../components/Hero";
import App from "../components/front";
import Videos from "../components/videos";
import LiveChat from "../components/LiveChat";
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import Auth from '../firebase/auth';


function Home() {
    const [user, setUser] = useState(null);
    const [chatVisible, setChatVisible] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
    }, []);

    const toggleChat = () => {
        setChatVisible(!chatVisible);
    };
    return (
      <div className="">
        <Navbar toggleChat={toggleChat} />
        {user ? (
                <div>
                    {chatVisible && <LiveChat user={user} />}
                </div>
            ) : (
                <Auth setUser={setUser} />
            )}
        <App />
        <Hero />
        <Info />
        <Videos/>
        <About />
      </div>
    );
  }
  
  export default Home;
  
