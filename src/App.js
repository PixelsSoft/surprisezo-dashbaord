
import Dashboard from "./pages/dashboard.page";
import AddDiscount from "./pages/discount/add-discount.page";
import Discount from "./pages/discount/discount.page";
import AddGift from "./pages/gifts/add-gift.page";
import Gifts from "./pages/gifts/gifts.page";
import Login from "./pages/login.page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quotations from "./pages/quote.page";
import User from "./pages/users/users.page";
import Subscriptions from "./pages/subscription/subscriptions.page";
import AddSubscription from "./pages/subscription/add-subscription.page";
import ForgotPassword from "./pages/forgot-password.page";
import VerifyOtp from "./pages/verify-otp.page";
import NewPassword from "./pages/new-password.page";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} /> 
          <Route path='/gifts' element={<Gifts />} />
          <Route path="/add-gift" element={<AddGift />} />
          <Route path="/discount-coupon" element={<Discount />} />
          <Route path='/add-discount' element={<AddDiscount />} />
          <Route path='/quotation' element={<Quotations />} />
          <Route path='/users' element={<User />} />
          <Route path='/subscriptions' element={<Subscriptions />} />
          <Route path='/add-subscription' element={<AddSubscription />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/verify-otp' element={<VerifyOtp />} />
          <Route path='/new-password' element={<NewPassword />} />
      </Routes>
    </BrowserRouter>
  )
}