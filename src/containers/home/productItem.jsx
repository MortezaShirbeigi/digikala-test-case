import React from "react";
import { Link } from "react-router-dom";
import { getDiscount, numberWithCommas } from "../../utilities";
import StarIcon from "../../assets/images/star.svg";

const ProductItem = ({ product }) => {
  const { title, price, paidPrice, image, rate, count } = product;

  return (
    <div className="product__box">
      <Link to="/">
        <div className="product__image">
          <img className="max-w100 max-height" src={image} alt="" />
        </div>
        <h1 className="product__title">{title}</h1>
      </Link>
      <div className="text-end my20">
        <span className="product__rate">{`${rate}(${count})`}</span>
        <img className="product__rate-icon" src={StarIcon} alt="" />
      </div>
      <div className="flex justify-space-between align-center">
        <div>
          <button className="product__button">+</button>
        </div>
        <div className="text-end">
          <div>
            <span className="product__discount">
              {getDiscount(price, paidPrice)}
            </span>
            <span className="product__price">{numberWithCommas(price)}</span>
          </div>
          <div>
            <span className="product__paid-price">
              {numberWithCommas(paidPrice)}
            </span>
            <span className="product__currency">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
