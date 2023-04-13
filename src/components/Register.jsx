import React from "react";

const Register = () => {
  return (
    <div className="register-form">
      <form action="submit">
        <h1>Welcome!</h1>
        <p>Sign up to gain access to exclusive member discounts!</p>
        <br />
        <hr />
        <br />
        <div className="register-double">
          <input type="text" placeholder="First name*" />
          <input type="text" placeholder="Last name*" />
        </div>
        <input type="text" placeholder="Email address*" />
        <input type="text" placeholder="Password*" />
        <div className="register-double">
          <input type="text" placeholder="Date of birth*" />
          <select name="gender" className="gender-select">
            <option className="select-title" value="gender">
              Gender
            </option>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <input type="text" placeholder="Phone number*" />
        <br />
        <button>join</button>
      </form>
    </div>
  );
};

export default Register;
