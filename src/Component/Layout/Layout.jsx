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
import { GetUserDetailsByToken } from "../../Utill/Api";
import { useEffect, useState } from "react";
import { ProductDetail } from "../Product/ProductDetail";
import { ConfrimOrder } from "./ConfrimOrder";
import { OrderDetails } from "../Home/MyProfile/OrderDetails";
import { SuccessOrder } from "../Product/Successfull/SuccessOrder";

function Layout() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const Token = localStorage.getItem("Token");
    GetUserDetailsByToken(Token).then((data) => {
      console.log(data);
      setUser(data);
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header user={user}></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product/:productId" element={<ProductDetail />} />
          <Route path="Login" element={<Login />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="ForgotPassword" element={<ForgotPassword />} />
          <Route path="SetNewPassword" element={<SetNewPassword />} />
          <Route path="MyProfile" element={<MyProfile user={user} />} />
          <Route path="MyAccount" element={<MyAccount user={user} />} />
          <Route path="PersonalInformation" element={<PersonalInformation user={user} />} />
          <Route path="MyOrder" element={<MyOrder user={user} />} />
          <Route path="MyAddress" element={<MyAddress user={user} />} />
          <Route path="ConfrimOrder" element={<ConfrimOrder />} />
          <Route path="/Order/:OrderId" element={<OrderDetails />} />
          <Route path="SuccessOrder/:OrderId" element={<SuccessOrder />} />
          <Route path="OrderDetails" element={<OrderDetails />} />
        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}
export default Layout;
