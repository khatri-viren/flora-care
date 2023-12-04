import HomePage from "../pages/HomePage.jsx";
import UserDashboard from "../pages/UserDashboard.jsx";
import AboutUs from "../pages/AboutUs";
import Shop from "../pages/Shop";
import ProductPage from "../pages/ProductPage";
import BlogsHome from "../pages/BlogsHome";
import BlogPage from "../pages/BlogPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Cart from "../pages/Cart";
import PaymentShipping from "../pages/PaymentShipping";
import CheckoutSuccess from "../pages/CheckoutSuccess.jsx";

const userRoutes = [
  { path: "/", component: HomePage, exact: true },
  { path: "/userdashboard", component: UserDashboard },
  { path: "/aboutus", component: AboutUs },
  { path: "/shop", component: Shop },
  { path: "/productpage/:id", component: ProductPage },
  { path: "/blogshome", component: BlogsHome },
  { path: "/blogpage/:id", component: BlogPage },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
  { path: "/cart", component: Cart },
  { path: "/payship", component: PaymentShipping },
  { path: "/checkout-success", component: CheckoutSuccess },
];

export default userRoutes;
