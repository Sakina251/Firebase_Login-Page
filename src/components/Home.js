import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";

const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <div className="p-4 box mt-3 text-center">
        <h1>Welcome to Stree</h1> <br/>
        {user && user.email}
      </div>
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
        <Button type="light" onClick='http://127.0.0.1:5501/index.html' href="http://127.0.0.1:5501/index.html">
          Home Page
        </Button>
      </div>
    </>
  );
};

export default Home;
