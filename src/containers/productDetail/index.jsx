import React, { useEffect, useState } from "react";
import Image from "../../components/image";
import { getDiscount, numberWithCommas } from "../../utilities";
import LinkeIcon from "../../assets/images/like.svg";
import { useParams, withRouter } from "react-router-dom";
import Loading from "../../components/loading";
import { getData } from "../../utilities/requests";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseQuantity } from "../../redux/cart/cart.actions";

const ProductDetail = ({ history }) => {
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      try {
        const data = await getData(`product/${id}/`);
        // delay for show better loading
        setTimeout(() => {
          setProduct(data.product);
        }, 1000);
      } catch (error) {
        console.log(error);
        setTimeout(() => {
          history.push("/");
        }, 1000);
      }
    })();
  }, [id, history]);

  return product ? (
    <div className="container">
      <div className="col-4 my-60">
        <Image
          className="max-w100"
          url={product.images.main}
          alt={product.title}
        />
      </div>
      <div className="col-8 p-30 my-60">
        <h1 className="product-detail__title">{product.title}</h1>
        <div className="my-20">
          {!product.price.rrp_price === product.price.rrp_price && (
            <div>
              <span className="product-detail__discount">
                {getDiscount(
                  product.price.rrp_price,
                  product.price.selling_price
                )}
              </span>
              <span className="product-detail__price">
                {numberWithCommas(product.price.rrp_price)}
              </span>
            </div>
          )}
          <p className="product-detail__paidPrice">
            {`${numberWithCommas(product.price.selling_price)} تومان`}
          </p>
          <span>
            <Image
              url={LinkeIcon}
              alt={product.title}
              width="15px"
              className="ml-5"
            />
          </span>
          <span>{`${product.rating.rate}٪ (${product.rating.count} نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.`}</span>
        </div>
        <div>
          {cartData.cartProducts.find((product) => product.id === id) ? (
            <button
              className="product-detail__button"
              onClick={() => dispatch(addToCart(product))}
            >
              افزودن به سبد خرید
            </button>
          ) : (
            <button
              className="product-detail__button"
              onClick={() => dispatch(increaseQuantity(product.id))}
            >
              افزودن به سبد خرید
            </button>
          )}
        </div>
      </div>
    </div>
  ) : (
    <div className="min-vh100 flex justify-center align-center">
      <Loading />
    </div>
  );
};

export default withRouter(ProductDetail);
