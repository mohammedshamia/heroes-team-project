import React,{ Suspense ,useState, useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Helpers/Theme/index";
import { GlobalStyles } from "./Helpers/globalStyle";
import { Routes, Route } from "react-router";
import SppinerLoading from './Components/Elements/SppinerLoading/index'
import Counter from "./Components/Elements/Counter/counter";

const HomePage = React.lazy(() => import('./Pages/HomePage/homePage'));
const LoginPage = React.lazy(() => import('./Pages/AuthPages/LoginPage/loginPage'));
const SignUpPage = React.lazy(() => import('./Pages/AuthPages/SignUpPage/signUpPage'));
const CreateProductPage = React.lazy(() => import('./Pages/CreateProductPage/createProductPage'));
const ProductPage = React.lazy(() => import('./Pages/ProductPage/productPage'));
const ProfilePage = React.lazy(() => import('./Pages/ProfilePage/profilePage'));
const ReviewPage = React.lazy(() => import('./Pages/ReviewPage/reviewPage'));
const SearchPage = React.lazy(() => import('./Pages/SearchPage/searchPage'));
const OrdersAdminPage = React.lazy(() => import('./Pages/AdminPages/OrdersAdminPage/ordersAdminPage'));
const ProductsAdminPage = React.lazy(() => import('./Pages/AdminPages/ProductsAdminPage/productsAdminPage'));
const UsersAdminPage = React.lazy(() => import('./Pages/AdminPages/UsersAdminPage/usersAdminPage'));
const NotFoundPage = React.lazy(() => import('./Pages/NotFoundPage'));
const PaymentPage= React.lazy(()=> import('./Pages/PaymentPage/paymentPage'))



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
      <Suspense  fallback= { <SppinerLoading /> } >
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles {...(theme === "dark" ? darkTheme : lightTheme)} />
        <Routes>
          {/* add header  */}
          
          {/* Auth */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/singUp" element={<SignUpPage />} />
          {/* Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/createProduct" element={<CreateProductPage />} />
          <Route path="/paymentProduct" element={<PaymentPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/reviewProduct" element={<ReviewPage />} />
          <Route path="/searchProduct" element={<SearchPage />} />
          {/* Admin Page */}
          <Route path="/users" element={<UsersAdminPage />} />
          <Route path="/products" element={<ProductsAdminPage />} />
          <Route path="/orders" element={<OrdersAdminPage />} />
          {/* notFoundPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
