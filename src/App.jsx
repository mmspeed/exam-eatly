import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./components/Header";
import Tovars from "./Tovars";
import Cart from "./Cart";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Footer from "./components/Footer";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tovars" element={<Tovars />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
