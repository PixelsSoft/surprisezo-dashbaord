import Dashboard from "./pages/dashboard.page";
import Login from "./pages/login.page";
import Users from "./pages/users.page";
import Discount from "./pages/discount.page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gifts from "./pages/gifts.page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/discount" element={<Discount /> } />
          <Route path="/gifts" element={<Gifts />} />
      </Routes>
    </BrowserRouter>
  )
}