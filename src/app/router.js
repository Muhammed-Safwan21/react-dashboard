import { Route, Routes } from "react-router-dom";
import  DashboardaPage  from "./pages/Dashboard";
import  SingnInPage  from "./pages/SignIn";
import  ProductPage from "./pages/Products";
import  OrdersPage  from "./pages/Orders";
import  SettingsPage  from "./pages/Settings";

export default function Router() {
  return (
    <Routes>
      <Route index element={<DashboardaPage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="settings" element={<SettingsPage />} />
      <Route path="SignIn" element={<SingnInPage />} />
    </Routes>
  );
}
