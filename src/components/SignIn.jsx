import React from "react";
import "../App.css";

const SignIn = () => {
  return (
    <div className="sign-in-form">
      <form action="submit">
        <h1>Welcome Back!</h1>
        <p>Sign in using your given credentials.</p>
        <br />
        <hr />
        <br />
        <div className="sign-in-inputs">
          <input type="text" placeholder="Email address*" />
          <input type="text" placeholder="Password*" />
        </div>

        <p className="dont-have">
          <strong>
            Don't have an account? Sign up{" "}
            <a href="#">
              <em>here</em>.
            </a>
          </strong>
        </p>
        <button>Log in</button>
      </form>
    </div>
  );
};

export default SignIn;
