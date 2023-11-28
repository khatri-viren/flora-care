import "./App.css";
import HomePage from "./pages/HomePage";
import UserDashboard from "./pages/UserDashboard.jsx";
import AboutUs from "./pages/AboutUs";
import Shop from "./pages/Shop";
import ProductPage from "./pages/ProductPage";
import BlogsHome from "./pages/BlogsHome";
import BlogPage from "./pages/BlogPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";
import PaymentShipping from "./pages/PaymentShipping";
import ManageProducts from "./pages/admin/ManageProducts";
import ManageBlogs from "./pages/admin/ManageBlogs";
import ProductEdit from "./pages/admin/ProductEdit";
import AddProduct from "./pages/admin/AddProduct";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import BlogEdit from "./pages/admin/BlogEdit";
import CheckoutSuccess from "./pages/CheckoutSuccess.jsx";
import NotFound from "./pages/NotFound.jsx";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./store/CartContext.jsx";
import { UserProvider } from "./store/UserContext.jsx";
import { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // Update the isLoggedIn state whenever the token changes
    const token = localStorage.getItem("authToken");
    setIsLoggedIn(token !== null);
  }, []);
  return (
    <>
      <div className="bg-ubg scroll-smooth">
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="mt-12"
        />
        <UserProvider>
          <Navbar isLoggedIn={isLoggedIn} />
          <CartProvider>
            <Routes>
              <Route index path="/" element={<HomePage />} />
              <Route
                path="/userdashboard"
                element={<UserDashboard setLogin={setIsLoggedIn} />}
              />
              <Route path="/shop" element={<Shop />} />
              <Route path="/aboutus" element={<AboutUs />} />

              <Route path="/productpage/:id" element={<ProductPage />} />

              <Route path="/blogshome" element={<BlogsHome />} />
              <Route path="/blogpage/:id" element={<BlogPage />} />
              <Route
                path="/login"
                element={<Login setLogin={setIsLoggedIn} />}
              />
              <Route path="/signup" element={<Signup />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/payship" element={<PaymentShipping />} />
              <Route path="/checkout-success" element={<CheckoutSuccess />} />
              <Route path="*" element={<NotFound />} />

              <Route
                path="/admin/manageproducts"
                element={<ManageProducts />}
              />
              <Route path="/admin/manageblogs" element={<ManageBlogs />} />
              <Route path="/admin/addproduct" element={<AddProduct />} />
              <Route path="/admin/addblog" element={<AddBlog />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/productedit/:id" element={<ProductEdit />} />
              <Route path="/admin/blogedit/:id" element={<BlogEdit />} />
            </Routes>
          </CartProvider>
          <Footer />
        </UserProvider>
      </div>
    </>
  );
}

export default App;
