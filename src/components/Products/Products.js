import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";

const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);

  const filter = (type) => {
    setMenuProducts(ProductsData.filter((product)=>product.type===type))
  }
  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1>Our Featured Products</h1>

      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
          <li onClick={()=>filter("skin care")}>Skin Care</li>
          <li onClick={()=>filter("conditioner")}>Conditioners</li>
          <li onClick={()=>filter("foundation")}>Foundations</li>
        </ul>

        <div className={css.list} ref={parent}>
          {MenuProducts.map((products, i) => (
            <div key={i} className={css.product}>
              <div className="left-s">
                <div className="name">
                  <span>{products.name}</span>
                  <span>{products.detail}</span>
                      </div>
                      <span>{products.price}$</span>
                      <div>Shop Now</div>
                  </div>
              <img src={products.img} alt="" className="img-p" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Products;
