import { useState } from "react";
import "./App.css";
import Products from "./components/Products";
import NumberInput from "./components/NumberInput";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
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
      <NumberInput />
      <Products category="all" />

      <Register />
      <br />
      <SignIn />
    </div>
  );
}

export default App;
