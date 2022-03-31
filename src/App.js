import {Home,
  CartPage,
  LoginPage, 
  LogoutPage, 
  ProductsPage, 
  SignupPage, 
  WishlistPage
} from "./pages/index";
import "./App.css";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogoutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
