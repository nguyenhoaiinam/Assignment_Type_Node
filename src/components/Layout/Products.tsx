import React from "react";
import { useState, useEffect } from "react";
import { getProducts } from "../../api/product";
import { Link } from "react-router-dom";
import {GithubOutlined} from '@ant-design/icons'
import { getCategories } from "../../api/category";
type Props = {};

const Products = (props: Props) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response.data.docs);
    });
  }, []);
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response.data.docs);
    });
  }, []);
  const getCategoryName = (categoryId: string | number) => {
    const category = categories.find((c) => c._id === categoryId);
    return category ? category.name : "";
  };

  return (
    <div>
      <section id="work" className="work">
        <div className="container">
          <h1 className="section-heading"><span>Our</span> Works</h1>
          <p>We provide high standar clean website for your business solutions</p>

            <div className="card-wrapper">
            {products.map((product) => (
              <div className="card">
                <div className="overlay">
                  <Link to={`/products/${product._id}`}>
                    {product.name}
                  </Link>
                </div>
                <img src={product.img} alt="" />
              </div>
                        ))}
            </div>

        </div>
      </section>
    </div>
  );
};

export default Products;
