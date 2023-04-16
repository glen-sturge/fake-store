import "./App.css";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import ProductGrid from "./components/ProductGrid";
import Products from "./components/Products";
import SaleBanner from "./components/SaleBanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Support from "./components/Support";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
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
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
