import Header from "./Header";
import Footer from "./Footer";
import Home from "../Home/Home";
import { Login } from "../Log in/Login";
import { Cart } from "./Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Layout.css";


function Layout() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Cart" element={<Cart />} />

          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
export default Layout;
