import Header from "./Header";
import Footer from "./Footer";
import Home from "../Home/Home";
import { Login } from "./Login";
import { Cart } from "./Cart";
import { ContactUs } from "./ContactUs/ContactUs";
import { AboutUs } from "./AboutUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "../Log in/SignUP";
import { ForgotPassword } from "../Log in/ForgotPassword";
import { SetNewPassword } from "../Log in/SetNewPassword";
import { MyProfile } from "../Home/MyProfile/MyProfile";
import { MyAccount } from "../Home/MyProfile/MyAccount";
import { PersonalInformation } from "../Home/MyProfile/PersonalInformation";
import { MyOrder } from "../Home/MyProfile/MyOrder";
import { MyAddress } from "../Home/MyProfile/MyAddress";

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
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="SetNewPassword" element={<SetNewPassword />} />
          <Route path="MyProfile" element={<MyProfile />} />
          <Route path="MyAccount" element={<MyAccount />} />
          <Route path="PersonalInformation" element={<PersonalInformation />} />
          <Route path="MyOrder" element={<MyOrder />} />
          <Route path="MyAddress" element={<MyAddress />} />


         
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
export default Layout;
