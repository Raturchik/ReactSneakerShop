import { Route, Routes } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { HomePage, CartPage, FavouritePage, OrderPages } from "./pages";
import style from "./index.module.scss";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<HomePage />} index />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
        <Route path="/order" element={<OrderPages />} />
      </Route>
    </Routes>
  );
}
