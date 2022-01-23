import React, { Suspense, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Helpers/Theme/index";
import { GlobalStyles } from "./Helpers/globalStyle";
import { Routes, Route, Navigate } from "react-router";
import SppinerLoading from "./Components/Elements/SppinerLoading/index";
import Header from "./Components/Header";
import useThemeMode from "./Hook/UseThemeMode";

import { useAppDispatch } from "./Store/configureStore";

import { userSignOut } from "./Store/Slices/user";
import CategoryPage from "./Pages/CategoryPage";
import ProductsPage from "./Pages/ProductsPage";

//pages
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const LoginPage = React.lazy(() => import("./Pages/AuthPages/LoginPage"));
const SignUpPage = React.lazy(() => import("./Pages/AuthPages/SignUpPage"));
const CreateProductPage = React.lazy(() => import("./Pages/CreateProductPage"));
const ProductPage = React.lazy(() => import("./Pages/ProductPage"));
const ProfilePage = React.lazy(() => import("./Pages/ProfilePage"));
const ShippingPage = React.lazy(
  () => import("./Pages/ReviewPage/shippingReviewPage")
);
const PlaceOrderPage = React.lazy(
  () => import("./Pages/ReviewPage/placeOrder")
);
const SearchPage = React.lazy(() => import("./Pages/SearchPage"));
const NotFoundPage = React.lazy(() => import("./Pages/NotFoundPage"));
const PaymentPage = React.lazy(() => import("./Pages/PaymentPage"));
const CartPage = React.lazy(() => import("./Pages/CartPage"));
const OrdersAdminPage = React.lazy(
  () => import("./Pages/AdminPages/OrdersAdminPage")
);
const ProductsAdminPage = React.lazy(
  () => import("./Pages/AdminPages/ProductsAdminPage")
);
const UsersAdminPage = React.lazy(
  () => import("./Pages/AdminPages/UsersAdminPage")
);

function App() {
  const dispatch = useAppDispatch();

  const { theme, ToggelTheme } = useThemeMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;
  useEffect(() => {
    // dispatch(userSignOut());
    // dispatch(getAllProductsByPaginate());
  }, [dispatch]);

  return (
    <div className="App">
      <Suspense fallback={<SppinerLoading />}>
        <ThemeProvider theme={themeMode}>
          <GlobalStyles {...themeMode} />
          {/* add header  */}
          <Header ToggelTheme={ToggelTheme} />

          {/* Auth */}
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            {/* Pages */}
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/search/:keyword" element={<SearchPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            {/* product pages */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/product/create" element={<CreateProductPage />} />
            <Route path="/product/payment" element={<PaymentPage />} />
            <Route
              path="/product/review/shipping/:id"
              element={<ShippingPage />}
            />
            <Route
              path="/product/review/placeorder/:id"
              element={<PlaceOrderPage />}
            />
            {/* Admin Page */}
            <Route path="/admin/users" element={<UsersAdminPage />} />
            <Route path="/admin/products" element={<ProductsAdminPage />} />
            <Route path="/admin/orders" element={<OrdersAdminPage />} />
            {/* notFoundPage */}
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
