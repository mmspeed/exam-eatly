import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./components/Header";
import Tovars from "./Tovars";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tovars" element={<Tovars />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
