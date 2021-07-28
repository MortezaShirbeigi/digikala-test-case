import React from "react";
import ProductItem from "./productItem";

const ProductList = () => {
  const product = {
    image:
      "https://dkstatics-public.digikala.com/digikala-products/b7da98a720fa9469aa1c0a8172c2515f673889b2_1623243117.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
    title: `گوشی موبایل سامسونگ مدل Galaxy A12 SM-A125F/DS دو سیم کارت ظرفیت 64 گیگابایت`,
    price: 490000,
    paidPrice: 414100,
    rate: 4.4,
    count: 558,
  };

  return (
    <div className="container my60 product-list">
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
      <div className="col-3 ">
        <ProductItem product={product} />
      </div>
    </div>
  );
};

export default ProductList;
