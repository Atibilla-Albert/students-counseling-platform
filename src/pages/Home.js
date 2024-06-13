// /src/components/Home.js
import Navbar from "../components/navbar";
import About from "../components/About";
import Info from "../components/Info";
import Hero from "../components/Hero";
import App from "../components/front";
import Videos from "../components/videos";
import LiveChat from "../components/LiveChat";
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../firebase/auth";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    verifyUser((user) => {
      if (!user) {
        navigate("/signin");
      }
    });
  }, [navigate]);

    const [user, setUser] = useState(null);
    const [chatVisible, setChatVisible] = useState(false);
    const toggleChat = () => {
        setChatVisible(!chatVisible);
    };

  return (
    <div>
        <Navbar toggleChat={toggleChat} />
        <App />
        <Hero />
        <Info />
        <Videos/>
        <About />
    </div>
  );
};

export default Home;