import React, { useState } from "react";
import "../db.json";

const Register = ({ addUser, users, onClose }) => {
  //values for registration
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    // Return object with each field as a key from input.
    const data = {
      firstName,
      lastName,
      email,
      password,
      dob,
      gender,
      phone,
    };
    e.preventDefault();

    // Validation checks
    if (!firstName) {
      alert("Please enter your first name.");
      //Stops Execution.
      return;
    }
    if (!lastName) {
      alert("Please enter your last name.");
      return;
    }
    if (users.find((user) => user.email === email)) {
      alert("Email already associated with another account.");
      return;
    }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (
      !password ||
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+~`\-={}[\]|:;"'<>,.?/])[a-zA-Z\d!@#$%^&*()_+~`\-={}[\]|:;"'<>,.?/]{8,16}$/.test(
        password
      )
    ) {
      alert(
        "Please enter a valid password (8-16 characters with at least one uppercase letter, one lowercase letter, one number, and one special character. No whitespace.)."
      );
      return;
    }
    if (!dob || !/^\d{2}\/\d{2}\/\d{2}$/.test(dob)) {
      alert("Please enter a valid date of birth (MM/DD/YY).");
      return;
    }
    if (!phone || !/^\d{10}$/.test(phone)) {
      alert("Please enter a valid phone number (10 digits).");
      return;
    }

    //log for now, will return/save to db.
    console.log(data);
    addUser(data);

    // Clear the input fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setDob("");
    setGender("");
    setPhone("");

    onClose();
  };

  const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <h1>Welcome!</h1>
        <p>Sign up to gain access to exclusive member discounts!</p>
        <br />
        <hr />
        <div className="register-double">
          <input
            type="text"
            placeholder="First name*"
            value={firstName}
            onChange={(e) => setFirstName(capitalizeFirst(e.target.value))}
          />
          <input
            type="text"
            placeholder="Last name*"
            value={lastName}
            onChange={(e) => setLastName(capitalizeFirst(e.target.value))}
          />
        </div>
        <input
          type="email"
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
        <div className="register-double">
          <input
            type="text"
            placeholder="Date of birth* (MM/DD/YY)"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          <select
            name="gender"
            className="gender-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option className="select-title" value="">
              Select Gender*
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <input
          type="text"
          placeholder="Phone number*"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button type="submit">Join</button>
      </form>
    </div>
  );
};

export default Register;
