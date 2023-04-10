import'./pages/Style/style.css'
import'./pages/Style/utilities.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import HomePage from './components/HomePage'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/Product/ProductManagement'
import AddProductPage from './pages/admin/Product/AddProduct'
import { getProducts, addProduct, deleteProducts, updateProduct } from './api/product';
import { getCategories, addCategory, deleteCategories, updateCategory } from './api/category';
import UpdateProductPage from './pages/admin/Product/UpdateProduct'
import AdminLayout from './pages/Layouts/AdminLayout'
import WebsiteLayout from './pages/Layouts/WebsiteLayout'
import Signin from "./pages/admin/Auth/signIn";

import { IProduct } from "./interfaces/product";
import { ICategory } from "./interfaces/category";
import SignUp from "./pages/admin/Auth/signUp";
import Products from "./components/Layout/Products";
import ProductsDetail from "./components/Layout/Products-detail";
import CategoriesManagementPage from "./pages/admin/Categories/CateManagement";
import UpdateCatePage from "./pages/admin/Categories/UpdateCategories";
import AddCatePage from "./pages/admin/Categories/AddCategories";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data.docs);
    });
  }, []);
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response.data);
    });
  }, []);
  const onHandleRemove = (id: string | number) => {
    deleteProducts(id).then(() => {
      setProducts(products.filter((item) => item._id !== id));
    });
  };
  const onHandleAdd = (product: IProduct) => {
    addProduct(product).then((data) => {
      console.log(data);
      getProducts().then(({ data }) => setProducts(data.docs))
    });
  };

  const onHandleUpdate = (product: IProduct) => {
    updateProduct(product).then(() => {
      setProducts(products.map((item) => (item._id === product._id ? product : item)));
    });
  };
  const onHandleRemoveCate = (id: string | number) => {
    console.log(id);
    deleteCategories(id).then(() => {
      setCategories(categories.filter((item) => item._id !== id));      
    });
  };
  const onHandleAddCate = (category:ICategory) => {
    addCategory(category).then(() => {
      getCategories().then(({data}) => setCategories(data))
    });
  };

  const onHandleUpdateCategory = (category:ICategory) => {
    updateCategory(category).then(() => {
      setCategories(categories.map((item) => (item._id === category._id ? category : item)));
    });
  };
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/products/:id' element={<ProductsDetail />} />
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path='products'>
              <Route index element={<Products />} />
              {/* <Route path=':id' element={<ProductsDetail/>} /> */}
            </Route>
          </Route>
          <Route path="signup" index element={<SignUp />} />
          <Route path="login" index element={<Signin />} />
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' >
              <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} categories={categories} />} />
              <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
              <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} categories={categories} />} />
            </Route>
            <Route path='categories' >
              <Route index element={<CategoriesManagementPage categories={categories} removeCate={onHandleRemoveCate} />} />
              <Route path='add' element={<AddCatePage onAddCate={onHandleAddCate} />} />
              <Route path=':id/update' element={<UpdateCatePage onUpdateCate={onHandleUpdateCategory} categories={categories}/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App