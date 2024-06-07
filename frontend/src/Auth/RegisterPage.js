import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/register.css";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Handle registration logic
  }

  function handleCancelClick() {
    navigate("/"); // Redirect to the login page
  }

  return (
    <div className="App">
      <div className="purple-section">
        <img
          src="images/purpleVideo.gif"
          height="100%"
          width="100%"
          alt="purple"
        />
      </div>

      <div className="white-section">
        <div className="top-bar">
          <h1>CineLens</h1>
          <p>Hey there , Lets Get You An Account !! </p>
          <div className="signin-buttons">
            <button>
              <img src="images/google.svg" alt="Google Logo" /> Sign up with
              Google
            </button>
            <button>
              <img src="images/facebook.svg" alt="Facebook Logo" /> Sign up with
              Facebook
            </button>
          </div>
        </div>

        <div className="container">
          <div className="line" />
          <div className="text">Or Register With</div>
          <div className="line" />
        </div>
        <form className="register-form" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Enter Your Username"
            />
          </label>
          <label>
            Email Id
            <input type="text"
            placeholder="Enter your name"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter Your Password"
            />
          </label>
          <label>
            Confirm Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="ReEnter Your Password"
            />
          </label>

          <div className="button-register-container ">
            <button type="submit">Register</button>
            <button type="button" onClick={handleCancelClick}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
