import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Image from "../../components/image";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/cart/cart.actions";

const Cart = ({ history }) => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cart);
  const { cartProducts: products } = cartData;

  return (
    <div className="container cart">
      <div className="col-12 my-60">
        <h1>سبد خرید</h1>
        {products &&
          !!products.length &&
          products.map((product, index) => {
            const { title, count, id } = product;
            const { main: image } = product.images;
            const { selling_price: price } = product.price;
            console.log(products);

            return (
              <div
                key={index}
                className="container my-20 py-10 justify-center align-center cart-item"
              >
                <div className="col-1 text-center border-left">
                  <div className="flex justify-center">
                    <Image url={image} className="cart__image" />
                  </div>
                </div>
                <div className="col-5 border-right text-center">
                  <Link to={`product/${id}`}>{title}</Link>
                </div>
                <div className="col-2 border-right">
                  <p className="text-center">{price}</p>
                </div>
                <div className="col-2 border-right">
                  <p className="text-center">{count}</p>
                </div>
                <div className="col-2 border-right">
                  <div className="flex justify-center align-center">
                    <button
                      className="cart-item__button"
                      onClick={() => dispatch(increaseQuantity(id))}
                    >
                      <div className="plus"></div>
                    </button>
                    <button
                      className="cart-item__button"
                      onClick={() => dispatch(decreaseQuantity(id))}
                    >
                      <div className="minus"></div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        {products && !!products.length && (
          <div className="flex justify-center">
            <button
              className="cart__button"
              onClick={() => {
                dispatch(clearCart());
                history.push("/");
              }}
            >
              نهایی کردن سبد خرید
            </button>
          </div>
        )}
        {products && !products.length && <h3>سبد خرید خالی است</h3>}
      </div>
    </div>
  );
};

export default withRouter(Cart);
