import NotFound from "./pages/NotFound.jsx";

import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";

import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./store/CartContext.jsx";
import { UserProvider } from "./store/UserContext.jsx";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";
import AdminMiddleware from "./routes/AdminMiddleware.jsx";

function App() {
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
          <CartProvider>
            <Navbar />
            <Routes>
              {userRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              {adminRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={<route.component />}
                />
              ))}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </CartProvider>
        </UserProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
