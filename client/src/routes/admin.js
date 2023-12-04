import ManageProducts from "../pages/admin/ManageProducts";
import ManageBlogs from "../pages/admin/ManageBlogs";
import ProductEdit from "../pages/admin/ProductEdit";
import AddProduct from "../pages/admin/AddProduct";
import Dashboard from "../pages/admin/Dashboard";
import AddBlog from "../pages/admin/AddBlog";
import BlogEdit from "../pages/admin/BlogEdit";

const adminRoutes = [
  { path: "/admin/dashboard", component: Dashboard },
  { path: "/admin/manageproducts", component: ManageProducts },
  { path: "/admin/manageblogs", component: ManageBlogs },
  { path: "/admin/productedit/:id", component: ProductEdit },
  { path: "/admin/addproduct", component: AddProduct },
  { path: "/admin/blogedit/:id", component: BlogEdit },
  { path: "/admin/addblog", component: AddBlog },
];

export default adminRoutes;
