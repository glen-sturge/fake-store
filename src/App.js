import "./App.css";
import NavBar from "./components/NavBar";
import ProductDetails from "./components/ProductDetails";
import ProductGrid from "./components/ProductGrid";
import Products from "./components/Products";
import SaleBanner from "./components/SaleBanner";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ProductDetails />
      {/* <SaleBanner />
      <ProductGrid /> */}
      {/* <Products /> */}
    </div>
  );
}

export default App;
