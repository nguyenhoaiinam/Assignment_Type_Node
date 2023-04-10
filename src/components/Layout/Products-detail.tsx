import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getProductById } from "../../api/product";
import { getCategories } from "../../api/category";
const ProductsDetail = () => {
  const { id } = useParams();
  const [product, setProducts] = useState([]);
  const [cate, setCate] = useState([]);

  useEffect(() => {
    getProductById(id).then((response) => {
      setProducts(response.data);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    getCategories().then((response) => {
      setCate(response.data);
      console.log(response.data);
    });
  }, []);
  // const getCategoryName = (a) => {
  //   const category = cate.find((c) => c._id == a);
  //   return category ? category.name : "";
  // };  
  
  
  return (
    <div>
      <div><Header /></div>
      <div>
        <section id="portfolio-details" className="portfolio-details">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-8">
                <div className="portfolio-details-slider swiper">
                  <div className="swiper-wrapper align-items-center">
                    <div className="swiper-slide">
                      <img src={product.img} alt="" />
                    </div>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="portfolio-info">
                  <h3>Thông Tin Dự Án</h3>
                  <ul>
                    <li><strong>Tên Dự Án</strong>: {product.name}</li>
                    {/* <li><strong>Danh Mục</strong>: {getCategoryName(product.categoryID)}</li> */}
                    <li><strong>Github</strong>: <a href={product.link}>{product.link}</a></li>
                  </ul>
                </div>
                <div className="portfolio-description">
                  <h2>Mô Tả</h2>
                  <p>
                    {product.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div><Footer /></div>
    </div>
  );
};

export default ProductsDetail;
