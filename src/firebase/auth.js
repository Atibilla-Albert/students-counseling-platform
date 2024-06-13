// src/Auth.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

const Auth = ({ setUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);

    const handleAuth = async () => {
        try {
            if (isSignUp) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            onAuthStateChanged(auth, user => {
                if (user) {
                    setUser(user);
                }
            });
        } catch (error) {
            console.error(error.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <Link to="/" onClick={handleAuth}>{isSignUp ? 'Sign Up' : 'Sign In'}</Link>
            <button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Switch to Sign In' : 'Switch to Sign Up'}
            </button>
        </div>
    );
};

export default Auth;
