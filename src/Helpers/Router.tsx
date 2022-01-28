import { lazy } from "react";
import { Navigate } from "react-router";

// Pages
const HomePage = lazy(() => import("../Pages/HomePage"));
const SearchPage = lazy(() => import("../Pages/SearchPage"));
const CategoryPage = lazy(() => import("../Pages/CategoryPage"));
const ProductsPage = lazy(() => import("../Pages/ProductsPage"));

// Products Pages
const ProductPage = lazy(() => import("../Pages/ProductPage"));

// Auth Pages
const LoginPage = lazy(() => import("../Pages/AuthPages/LoginPage"));
const SignUpPage = lazy(() => import("../Pages/AuthPages/SignUpPage"));

// User Pages
const ProfilePage = lazy(() => import("../Pages/ProfilePage"));
const CartPage = lazy(() => import("../Pages/CartPage"));
const ShippingPage = lazy(
  () => import("../Pages/ReviewPage/shippingReviewPage")
);
const PlaceOrderPage = lazy(() => import("../Pages/ReviewPage/placeOrder"));
const PaymentPage = lazy(() => import("../Pages/PaymentPage"));
const OrdersPage = lazy(() => import("../Pages/OrdersPage"));

// Admin Pages
const UsersAdminPage = lazy(() => import("../Pages/AdminPages/UsersAdminPage"));
const OrdersAdminPage = lazy(
  () => import("../Pages/AdminPages/OrdersAdminPage")
);
const ProductsAdminPage = lazy(
  () => import("../Pages/AdminPages/ProductsAdminPage")
);

const EditUserPage = lazy(() => import("../Pages/AdminPages/EditUserPage"));
const CreateProductPage = lazy(() => import("../Pages/CreateProductPage"));
const EditProductPage = lazy(() => import("../Pages/EditProdductPage"));

// Error Pages
const NotAuthPage = lazy(() => import("../Pages/ErrorPages/NotAuthPage"));
const NotFoundPage = lazy(() => import("../Pages/ErrorPages/NotFoundPage"));

// Constants Rules
const ALL = ["guist", "customer", "admin"];
const AUTH = ["customer", "admin"];
const ADMIN = ["admin"];
const GUIST = ["guist"];

const routes = [
  {
    name: "HomePage",
    component: <HomePage />,
    route: "/",
    ruleShouldBe: ALL,
    to: "/",
  },
  {
    name: "SearchPage",
    component: <SearchPage />,
    route: "/search/:keyword",
    ruleShouldBe: ALL,
    to: "/",
  },
  {
    name: "CategoryPage",
    component: <CategoryPage />,
    route: "/products/category/:name",
    ruleShouldBe: ALL,
    to: "/",
  },
  {
    name: "ProductsPage",
    component: <ProductsPage />,
    route: "/products",
    ruleShouldBe: ALL,
    to: "/",
  },

  {
    name: "ProductPage",
    component: <ProductPage />,
    route: "/product/:id",
    ruleShouldBe: ALL,
    to: "/",
  },

  // Auth Pages
  {
    name: "LoginPage",
    component: <LoginPage />,
    route: "/login",
    ruleShouldBe: GUIST,
    to: "/",
  },
  {
    name: "SignUpPage",
    component: <SignUpPage />,
    route: "/signup",
    ruleShouldBe: GUIST,
    to: "/",
  },

  // User Pages
  {
    name: "ProfilePage",
    component: <ProfilePage />,
    route: "/profile",
    ruleShouldBe: AUTH,
    to: "/login",
  },
  {
    name: "CartPage",
    component: <CartPage />,
    route: "/cart",
    ruleShouldBe: AUTH,
    to: "/login",
  },
  {
    name: "ShippingPage",
    component: <ShippingPage />,
    route: "/product/review/shipping/:id",
    ruleShouldBe: AUTH,
    to: "/login",
  },
  {
    name: "PlaceOrderPage",
    component: <PlaceOrderPage />,
    route: "/product/review/placeorder/:id",
    ruleShouldBe: AUTH,
    to: "/login",
  },
  {
    name: "PaymentPage",
    component: <PaymentPage />,
    route: "/product/payment/:id",
    ruleShouldBe: AUTH,
    to: "/login",
  },
  {
    name: "OrdersPage",
    component: <OrdersPage />,
    route: "/orders",
    ruleShouldBe: AUTH,
    to: "/login",
  },

  // Admin Pages
  {
    name: "UsersAdminPage",
    component: <UsersAdminPage />,
    route: "/admin/users",
    ruleShouldBe: ADMIN,
    to: "/401",
  },
  {
    name: "EditUserPage",
    component: <EditUserPage />,
    route: "/admin/user/edit/:id",
    ruleShouldBe: ADMIN,
    to: "/401",
  },
  {
    name: "ProductsAdminPage",
    component: <ProductsAdminPage />,
    route: "/admin/products",
    ruleShouldBe: ADMIN,
    to: "/401",
  },
  {
    name: "CreateProductPage",
    component: <CreateProductPage />,
    route: "/admin/product/create",
    ruleShouldBe: AUTH,
    to: "/login",
  },
  {
    name: "EditProductPage",
    component: <EditProductPage />,
    route: "/admin/product/edit/:id",
    ruleShouldBe: ADMIN,
    to: "/login",
  },
  {
    name: "OrdersAdminPage",
    component: <OrdersAdminPage />,
    route: "/admin/orders",
    ruleShouldBe: ADMIN,
    to: "/401",
  },

  // Error Pages
  {
    name: "NotAuthPage",
    component: <NotAuthPage />,
    route: "/401",
    ruleShouldBe: ALL,
    to: "/",
  },
  {
    name: "NotFoundPage",
    component: <NotFoundPage />,
    route: "/404",
    ruleShouldBe: ALL,
    to: "/",
  },
  {
    name: "redirect",
    component: <Navigate to="/404" />,
    route: "*",
    ruleShouldBe: ALL,
    to: "/",
  },
];

export default routes;
