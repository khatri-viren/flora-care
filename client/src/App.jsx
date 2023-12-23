import NotFound from "./pages/NotFound.jsx";

import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";

import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./store/CartContext.jsx";
import { useUser } from "./store/UserContext.jsx";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.js";

function App() {
  const { user } = useUser();
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
                element={
                  user && user.role === "admin" ? (
                    <route.component />
                  ) : (
                    <Navigate to="/notfound" />
                  )
                }
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CartProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
