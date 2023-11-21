import './App.css';
import HomePage from './pages/HomePage';
import UserDashboard from './components/UserDashboard/UserDashboard';
import AboutUs from './pages/AboutUs';
import Shop from './pages/Shop';
import ProductPage from './pages/ProductPage';
import BlogsHome from './pages/BlogsHome';
import BlogPage from './pages/BlogPage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Navbar from './components/shared/Navbar/Navbar';
import Footer from './components/shared/Footer/Footer';
import PaymentShipping from './pages/PaymentShipping';
import ManageProducts from './pages/admin/ManageProducts';
import ProductEdit from './pages/admin/ProductEdit';
import AddProduct from './pages/admin/AddProduct';
import Dashboard from './pages/admin/Dashboard';
import AddBlog from './pages/admin/AddBlog';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className='bg-ubg'>
      <Navbar />
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/userdashboard" element={<UserDashboard />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/blogshome" element={<BlogsHome />} />
        <Route path="/blogpage" element={<BlogPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payship" element={<PaymentShipping />} />
        <Route path='/admin/manageproducts' element={<ManageProducts />} />
        <Route path='/admin/addproduct' element={<AddProduct />} />
        <Route path='/admin/addblog' element={<AddBlog />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/productedit/:id' element={<ProductEdit />} />
      </Routes>
    <Footer />
    </div>
  );
}

export default App;
