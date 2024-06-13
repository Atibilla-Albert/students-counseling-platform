// /src/components/VerifyUser.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyUser } from "../auth";

const VerifyUser = () => {
  const navigate = useNavigate();

  useEffect(() => {
    verifyUser((user) => {
      if (!user) {
        navigate("/signin");
      }
    });
  }, [navigate]);

  return <div>Welcome, user!</div>;
};

export default VerifyUser;
