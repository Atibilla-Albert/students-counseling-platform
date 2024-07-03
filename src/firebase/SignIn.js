// /src/components/SignIn.js
import React, { useState } from "react";
import { signIn } from "./auth";
import { useNavigate } from "react-router-dom";
import  "../styles/auth.css"

const SignIn = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");

 

 try {
      const user = await signIn(email, password);
      console.log("Signed in user:", user);
      navigate("/")
      // Redirect or perform other actions after successful sign-in
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSignIn}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Sign In</button>


      </form>
    </div>
  );
};

export default SignIn;
