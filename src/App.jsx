import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/homepage/Shop";
import Gifting from "./components/gifting/Gifting";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Celebration from "./components/celebration/Celebration";
import GiftingCard from "./components/giftingcard/GiftingCard";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import store from "./store/Store";
import Cart from "./components/Cart";
import Homepage from "./components/homepage/HomePage";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import Whatsup from "./Whatsup";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <div className="bg-[#f6f5ec]">
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/shop" element={<Home />} />
            <Route path="/gifting" element={<Gifting />} />
            <Route path="/celebration" element={<Celebration />} />
            <Route path="/card" element={<GiftingCard />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Whatsup />
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
