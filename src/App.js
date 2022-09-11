import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Category from "./components/main/Category";
import ItemDetailContainer from "./components/main/ItemDetailContainer";
import ItemListContainer from "./components/main/ItemListContainer";
import NavBar from "./components/navbar/NavBar";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/:slug" element={<Category />} />
          <Route path="/products/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
