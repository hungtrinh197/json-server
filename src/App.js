import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Layout from "./user_components/Layout";
import Login from "./pages/Login";
import LoginAdmin from "./admin_pages/LoginAdmin";
import Shopcart from "./pages/Shopcart";
import Layouts from "./admin_containers/Layouts";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./admin_pages/AddProduct";
import ProductAdminList from "./admin_pages/ProductAdminList";

import CheckOurAdmin from "./admin_pages/CheckOurAdmin";
import ProductTTN from "./page_danhmuc/ProductTTN";
import EditQC_admin from "./admin_pages/EditQC_admin";
import Thoitrangnu from "./page_danhmuc/HomeThoitrangnu";
import Loi from "./pages/Loi";
import DienthoaiHome from "./page_danhmuc/Homedienthoai";
import Thietbidien from "./page_danhmuc/Homethietbidien";
import Mayanh from "./page_danhmuc/Homemayanh";
import Dongho from "./page_danhmuc/HomeDongho";
import Giaydep from "./page_danhmuc/Homegiaydepnam";
import Xemay from "./page_danhmuc/Homexemay";
import Thethao from "./page_danhmuc/Homethethao";
import Thietbigiadung from "./page_danhmuc/Homethietbigiadung";
import Dashboard from "./admin_pages/Dashboard";
import ProductListCard from "./admin_pages/ProducListCard";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product-details/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Loi />} />
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Layout />} />
        <Route path="/admin" element={<Layouts />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shopcart" element={<Shopcart />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/productAdminList" element={<ProductAdminList />} />
        <Route path="/productListCard" element={<ProductListCard />} />
        <Route path="/checkout" element={<CheckOurAdmin />} />
        <Route path="/producTTN" element={<ProductTTN />} />
        <Route path="/editqc" element={<EditQC_admin />} />
        <Route path="/producTTnu" element={<Thoitrangnu />} />
        <Route path="/dienthoai" element={<DienthoaiHome />} />
        <Route path="/thietbidien" element={<Thietbidien />} />
        <Route path="/mayanh" element={<Mayanh />} />
        <Route path="/dongho" element={<Dongho />} />
        <Route path="/giaydep" element={<Giaydep />} />
        <Route path="/thethao" element={<Thethao />} />
        <Route path="/thietbigiadung" element={<Thietbigiadung />} />
        <Route path="/xemay" element={<Xemay />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
