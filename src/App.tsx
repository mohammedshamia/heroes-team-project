import { useState, useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Helpers/Theme/index";
import { GlobalStyles } from "./Helpers/globalStyle";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/AuthPages/LoginPage";
import SignUpPage from "./Pages/AuthPages/SignUpPage";
import CreateProductPage from "./Pages/CreateProductPage";
import PaymentPage from "./Pages/PaymentPage";
import ProductPage from "./Pages/ProductPage";
import ProfilePage from "./Pages/ProfilePage";
import ReviewPage from "./Pages/ReviewPage";
import OrdersAdminPage from "./Pages/AdminPages/OrdersAdminPage";
import ProductsAdminPage from "./Pages/AdminPages/ProductsAdminPage";
import UsersAdminPage from "./Pages/AdminPages/UsersAdminPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Header from "./Components/Header";
import SuccessPage from "./Pages/SuccessPage";
import SearchPage from "./Pages/SearchPage";
import CartPage from "./Pages/CartPage";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, [theme]);

  useEffect(() => {
    let theme_ = localStorage.getItem("theme");

    if (theme_) {
      setTheme(theme_);
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles {...(theme === "dark" ? darkTheme : lightTheme)} />
        {/* add header  */}
        <Header isLoggedIn={true} />

        <Routes>
          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          {/* Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/search/:keyword" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          {/* product pages */}
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route path="/product/payment" element={<PaymentPage />} />
          <Route path="/product/review/:id" element={<ReviewPage />} />
          {/* Admin Page */}
          <Route path="/admin/users" element={<UsersAdminPage />} />
          <Route path="/admin/products" element={<ProductsAdminPage />} />
          <Route path="/admin/orders" element={<OrdersAdminPage />} />
          {/* notFoundPage */}
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
