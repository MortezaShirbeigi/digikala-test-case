import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../redux/cart/cart.actions";
import Image from "../image";
import CartIcon from "../../assets/images/shopping-cart.png";
import { toggleModal } from "../../redux/app/app.actions";

const CartTable = ({ history }) => {
  const cartData = useSelector((state) => state.cart);
  const appState = useSelector((state) => state.app);
  const { cartProducts: products } = cartData;

  const dispatch = useDispatch();
  return (
    <div className="container cart">
      <div className="col-12 my-60">
        <h1>سبد خرید</h1>
        {products && products.length ? (
          <>
            {products.map((product, index) => {
              const { title, count, id } = product;
              const { main: image } = product.images;
              const { selling_price: price } = product.price;

              return (
                <div
                  key={index}
                  className="container my-20 py-10 justify-center align-center cart-item"
                >
                  <div className="col-1 text-center border-left">
                    <div>
                      <Image url={image} className="cart__image" />
                    </div>
                  </div>
                  <div className="col-5 border-right text-center">{title}</div>
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
            <div className="flex justify-center">
              <button
                className="cart__button"
                onClick={() => {
                  dispatch(clearCart());
                  history.push("/");
                  if (appState.modalStatus) {
                    dispatch(toggleModal());
                  }
                }}
              >
                نهایی کردن سبد خرید
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex justify-center align-center flex-column">
              <Image
                className="max-w100"
                width="50px"
                url={CartIcon}
                alt="سید خرید دیجیکالا"
              />
              <h1>سبد خرید خالی است</h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(CartTable);
