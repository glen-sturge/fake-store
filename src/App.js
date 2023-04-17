import { useState, useEffect } from "react";
import "./App.css";
import Products from "./components/Products";
import NumberInput from "./components/NumberInput";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [userData, setUserData] = useState([]);
  const [category, setCategory] = useState("men's clothing"); //"all", "electronics", "jewelery", "women's clothing", "men's clothing"
  function addUser(newUser) {
    const updatedState = [...userData, newUser];
    console.log(updatedState);
    setUserData(updatedState);
  }

  const showUserData = () => {
    console.log(userData);
  };

  const [loggedIn, setLoggedIn] = useState(false);

  // Check if user is logged in
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      const user = JSON.parse(localStorage.getItem("userData"));
      console.log(`Welcome back, ${user.firstName}!`);
    }
  }, [loggedIn]);

  const logOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
    setLoggedIn(false);
    console.log("You have been logged out.");
  };

  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element={<home/>}/>
    //   <Route path="category" element={<home/>}/>
    // </Routes>
    // </BrowserRouter>
    <div className="App">
      {loggedIn ? "Logged In" : "Not Logged In"}
      <NumberInput />
      <Products category={category} />

      <Register addUser={addUser} users={userData} />
      <br />
      <SignIn users={userData} login={setLoggedIn} />
      <button onClick={showUserData}>log user data</button>
      <br />
      <button onClick={logOut}>log out user</button>
    </div>
  );
}

export default App;
