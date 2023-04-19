import React, { useState } from "react";
import "../App.css";

const SignIn = ({ users, login, onClose, onHere }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //cool code to handle checking the username and password against the user-data.
    //Will hand back error messages if data is not found or incorrect in the case of password.

    //Validation
    if (!users.find((user) => user.email === email)) {
      alert("Email not associated with an account.");
      return;
    }
    if (!users.find((user) => user.password === password)) {
      alert("Passwords do not match records.");
      return;
    }

    //take the password out.
    const userData = users.find((user) => user.email === email);
    // console.log(userData);

    const { password: rename, ...userDataToSave } = userData;
    console.log(userDataToSave);

    //save login state
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userData", JSON.stringify(userDataToSave));
    login(true);

    //clear form
    setEmail("");
    setPassword("");
    onClose();
  };

  const handleHereClick = () => {
    onClose();
    onHere();
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
            <a href="#" onClick={handleHereClick}>
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
