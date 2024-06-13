// src/LiveChat.js
import React, { useState, useEffect } from 'react';
import { ref, onValue, push } from 'firebase/database';
import { signOut } from 'firebase/auth';
import { database, auth } from '../firebase/firebase';
import '../styles/LiveChat.css';
import Navbar from './navbar';

const LiveChat = ({ user }) => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const messagesRef = ref(database, 'messages');
        onValue(messagesRef, (snapshot) => {
            const messagesData = snapshot.val();
            const messagesList = [];
            for (let id in messagesData) {
                messagesList.push({ id, ...messagesData[id] });
            }
            setMessages(messagesList);
        });
    }, []);

    const handleSendMessage = () => {
        const messagesRef = ref(database, 'messages');
        const newMessage = {
            text: input,
            timestamp: new Date().toISOString(),
            uid: user.uid,
            email: user.email,
        };
        push(messagesRef, newMessage);
        setInput('');
    };

    return (
        <>
            <Navbar />
        <div className="live-chat">
            <div className="chat-window">
                {messages.map((message) => (
                    <div key={message.id} className={`chat-message ${message.uid === user.uid ? 'own' : ''}`}>
                        <div className="message-info">
                            <span className="message-email">{message.email}</span>
                            <span className="message-timestamp">
                                {new Date(message.timestamp).toLocaleTimeString()}
                            </span>
                        </div>
                        <p>{message.text}</p>
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
                <button onClick={() => signOut(auth)}>Sign Out</button>
            </div>
        </div>
        </>
    );
};

export default LiveChat;
