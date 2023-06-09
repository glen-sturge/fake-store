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
import Featured from "./components/Featured";

function App() {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [userData, setUserData] = useState([]);
  const [category, setCategory] = useState("all"); //"all", "electronics", "jewelery", "women's clothing", "men's clothing"

  // fetch from api
  useEffect(() => {
    async function fetchProducts() {
      let response;
      if (category === "all") {
        response = await fetch(`https://fakestoreapi.com/products`);
      } else {
        response = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
      }
      const data = await response.json();
      // console.log(data);
      setProducts(data);
    }

    fetchProducts();
  }, [category]);

  function addUser(newUser) {
    const updatedState = [...userData, newUser];
    console.log(updatedState);
    setUserData(updatedState);
  }

  //For testing
  // const showUserData = () => {
  //   console.log(userData);
  // };

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
        <NavBar
          addUser={addUser}
          users={userData}
          login={setLoggedIn}
          setCategory={setCategory}
          loggedIn={loggedIn}
          logOut={logOut}
        />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SaleBanner />
                  <ProductGrid setCategory={setCategory} />
                </>
              }
            />
            <Route
              path="/shop"
              element={
                <Products
                  setProduct={setProduct}
                  setCategory={setCategory}
                  products={products}
                />
              }
            />
            <Route path="/featured" element={<Featured />} />
            <Route path="/support" element={<Support />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/product"
              element={<ProductDetails product={product} />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
