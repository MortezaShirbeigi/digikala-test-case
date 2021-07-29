import React from "react";
import { Link } from "react-router-dom";
import { getDiscount, numberWithCommas } from "../../utilities";
import StarIcon from "../../assets/images/star.svg";
import { addToCart } from "../../redux/cart/cart.actions";
import { useDispatch } from "react-redux";
import Image from "../../components/image";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();
  const { title, id } = product;
  const { count, rate } = product.rating;
  const { rrp_price: price, selling_price: paidPrice } = product.price;

  return (
    product && (
      <div className="product__box">
        <Link to={`product/${id}`}>
          <div className="product__image">
            <Image
              url={product.images.main}
              alt={title}
              className="max-w100 max-height"
            />
          </div>
          <h1 className="product__title mt-20">{title}</h1>
        </Link>
        <div className="text-end my-20">
          {!!rate && (
            <>
              <span className="product__rate">{`${rate}(${count})`}</span>
              <Image
                url={StarIcon}
                alt={title}
                className="product__rate-icon"
              />
            </>
          )}
        </div>
        <div className="flex justify-space-between align-center">
          <div>
            <button
              className="product__button"
              onClick={() => addToCart(dispatch)}
            >
              +
            </button>
          </div>
          <div className="text-end">
            {price === paidPrice && (
              <div>
                <span className="product__discount">
                  {getDiscount(price, paidPrice)}
                </span>
                <span className="product__price">
                  {numberWithCommas(price)}
                </span>
              </div>
            )}
            <div>
              <span className="product__paid-price">
                {numberWithCommas(paidPrice)}
              </span>
              <span className="product__currency">تومان</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductItem;
