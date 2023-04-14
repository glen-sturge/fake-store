import React, { useState } from "react";
import "../App.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //cool code to handle checking the username and password against the db.json file holding "user-data".
    //Will hand back error messages if data is not found or incorrect in the case of password.
  };

  return (
    <div className="sign-in-form">
      <form onSubmit={handleSubmit}>
        <h1>Welcome Back!</h1>
        <p>Sign in using your given credentials.</p>
        <br />
        <hr />
        <br />
        <div className="sign-in-inputs">
          <input
            type="text"
            placeholder="Email address*"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password*"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="dont-have">
          <strong>
            Don't have an account? Sign up{" "}
            <a href="#">
              <em>here</em>.
            </a>
          </strong>
        </p>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default SignIn;
