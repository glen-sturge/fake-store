import "./App.css";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import ProductGrid from "./components/ProductGrid";
import Products from "./components/Products";
import SaleBanner from "./components/SaleBanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
