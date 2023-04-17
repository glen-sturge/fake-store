import { useState, useEffect } from "react";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductGrid from "./components/ProductGrid";
import Products from "./components/Products";
import SaleBanner from "./components/SaleBanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import Support from "./components/Support";


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

    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SaleBanner />
                <ProductGrid />
              </>
            }
          />
          <Route path="/shop" element={<Products />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
