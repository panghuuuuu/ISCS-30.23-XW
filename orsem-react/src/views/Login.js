import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../assets/mithi_logo_colored.webp";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import {
  googleLogout,
  GoogleLogin,
  GoogleOAuthProvider,
} from "@react-oauth/google";

const responseGoogle = (response) => {
  console.log(response);
};

const onGoogleLoginSuccess2 = () => {
  const GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/v2/auth";
  const REDIRECT_URI = "auth/api/login/google/";

  const scope = [
    "https://www.googleapis.com/auth/userinfo.email",
    "https://www.googleapis.com/auth/userinfo.profile",
  ].join(" ");

  const params = {
    response_type: "code",
    client_id: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
    redirect_uri: `${process.env.REACT_APP_API_URL}/${REDIRECT_URI}`,
    prompt: "select_account",
    access_type: "offline",
    scope,
  };

  const urlParams = new URLSearchParams(params).toString();
  window.location.href = `${GOOGLE_AUTH_URL}?${urlParams}`;
};

const LoginPage = ({ isLoggedIn, onLogout }) => {
  const location = useLocation();
  const [error, setError] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const errorParam = query.get("error");
    if (errorParam === "invalid_email") {
      Store.addNotification({
        title: "Invalid Email",
        message:
          "You are using an invalid email. Please login using your Ateneo student email. If errors persist, please send an email to orsem.college@student.ateneo.edu",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 7000,
          onScreen: true,
        },
      });
    }
  }, [location]);

  return (
    <>
      <ReactNotifications />

      <section className="flex flex-col h-screen bg-primaryBlue">
        <div className="login mx-auto my-auto flex flex-col items-center justify-center">
          <div className="login-form bg-primaryWhite w-2/3 mt-[100px] bg-gray-200 rounded-lg shadow-md px-8 py-12 text-center">
            <div className="logo flex justify-center mb-8">
              <img className="img" src={logo} alt="Logo" />
            </div>
            {error && (
              <p className="text-red-500 mb-4">{error}</p> // Display error message
            )}
            <div className="btn flex justify-center text-primaryBlue">
              {isLoggedIn ? (
                <div className="bg-primaryOrange py-2 px-4 flex rounded-3xl">
                  <button
                    onClick={onLogout}
                    className="text-primaryWhite font-bold"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <GoogleOAuthProvider
                  clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
                >
                  <GoogleLogin
                    onSuccess={onGoogleLoginSuccess2}
                    onError={responseGoogle}
                  />
                </GoogleOAuthProvider>
              )}
            </div>
            <p className="flex mt-2 p-4">
              Please sign-in using your Ateneo Student Gmail account
            </p>
          </div>
        </div>
        <div className="copyright-text text-center text-primaryWhite text-sm mt-8 mb-8">
          <p>
            © OrSem 2024 Mithi. All rights reserved.{" "}
            <a
              href="https://drive.google.com/file/d/1HWdyjn8VW7Qt3Gi57uNXVwUDJ-csDh9l/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>{" "}
            | <a href="mailto:orsem.ls@obf.ateneo.edu">Contact Us</a>
          </p>
        </div>
      </section>
    </>
  );
};

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    googleLogout();
    localStorage.clear();
    setIsLoggedIn(false);
    window.location.reload();
  };

  return (
    <div className="login-container">
      <LoginPage isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    </div>
  );
}
