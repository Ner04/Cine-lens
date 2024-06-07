import React, { useState, useEffect } from "react";
import "../css/login.css";
import Modal from "./Modal"; // Adjust the import path if necessary

export default function AuthPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isResponsive, setIsResponsive] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsResponsive(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsLoginVisible(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

  function toggleLoginVisibility() {
    setIsLoginVisible(!isLoginVisible);
  }

  return (
    <div className={`App ${isLoginVisible ? 'show-login' : ''}`}>
      <div className="purple-section">
        <img
          src="images/purplevideo.gif"
          height="100%"
          width="100%"
          alt="purple"
        />
        {isResponsive && (
          <button className="toggle-button" onClick={toggleLoginVisibility}>
            {isLoginVisible ? 'Back' : 'Login'}
          </button>
        )}
      </div>

      <div className="white-section">
        <div className="top-bar">
          <h1>CineLens</h1>
          <p>Hey there, welcome back!</p>
          <div className="signin-buttons">
            <button>
              <img src="images/google.svg" alt="Google Logo" /> Sign in with
              Google
            </button>
            <button>
              <img src="images/facebook.svg" alt="Facebook Logo" /> Sign in with
              Facebook
            </button>
          </div>
        </div>
        <div className="container">
          <div className="line" />
          <div className="text">Or Login With</div>
          <div className="line" />
        </div>
        <form className="login-form" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              type="text"
              name="username"
              placeholder="Enter Your Username"
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
            />
          </label>

          <div className="button-container">
            <button type="submit">Login</button>
          </div>
          <p>
            {" "}
            Don't Have An Account? <a href="./RegisterPage">Register</a>
          </p>
        </form>
        {isResponsive && isLoginVisible && (
          <button className="toggle-button" onClick={toggleLoginVisibility}>
            Back
          </button>
        )}
      </div>

      <Modal show={isModalOpen} onClose={handleModalClose} />
    </div>
  );
}
