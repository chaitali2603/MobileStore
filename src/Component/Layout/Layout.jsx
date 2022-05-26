import Header from "./Header";
import Footer from "./Footer";
import Home from "../Home/Home";
import { Login } from "./Login";
import { Cart } from "./Cart";
import { ContactUs } from "./ContactUs/ContactUs";
import { AboutUs } from "./AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Layout.css";
import { SignUp } from "../Log in/SignUP";
import { MyProfile } from "../Home/MyProfile";
import { ForgotPassword } from "../Log in/ForgotPassword";
import { SetNewPassword } from "../Log in/SetNewPassword";


function Layout() {
  return (
    <>
    
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="MyProfile" element={<MyProfile />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="SetNewtPassword" element={<SetNewPassword />} />


          {/* <Route path="invoices" element={<Invoices />} /> */}
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
export default Layout;
