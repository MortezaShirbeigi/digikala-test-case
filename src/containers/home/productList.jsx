import React from "react";
import Loading from "../../components/loading";
import ProductItem from "./productItem";

const ProductList = ({ products }) => {
  return products ? (
    <div className="container my-60 product-list">
      {products &&
        products.map((product, index) => (
          <div key={index} className="col-3">
            <ProductItem product={product} />
          </div>
        ))}
    </div>
  ) : (
    <div className="my-60">
      <Loading />
    </div>
  );
};

export default ProductList;
