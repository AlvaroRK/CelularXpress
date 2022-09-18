import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Cart from "./components/main/Cart";
import Category from "./components/main/Category";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import ItemListContainer from "./components/main/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import { CartProvider } from "./context/CartContext";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/:slug" element={<Category />} />
            <Route
              path="/products/item/:id"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
