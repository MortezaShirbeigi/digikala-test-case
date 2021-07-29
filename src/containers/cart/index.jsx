import React from "react";
import { useDispatch } from "react-redux";
import Image from "../../components/image";
import { addToCart, removeFromCart } from "../../redux/cart/cart.actions";

const Cart = () => {
  const dispatch = useDispatch();

  const products = [
    {
      title: "کرم دور چشم نئودرم مدل Multi Efficacy حجم 15 میلی لیتر",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/611459.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      price: 414100,
      count: 1,
    },
    {
      title: "کرم دور چشم نئودرم مدل Multi Efficacy حجم 15 میلی لیتر",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/611459.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      price: 414100,
      count: 1,
    },
    {
      title: "کرم دور چشم نئودرم مدل Multi Efficacy حجم 15 میلی لیتر",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/611459.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      price: 414100,
      count: 1,
    },
    {
      title: "کرم دور چشم نئودرم مدل Multi Efficacy حجم 15 میلی لیتر",
      image:
        "https://dkstatics-public.digikala.com/digikala-products/611459.jpg?x-oss-process=image/resize,m_lfit,h_350,w_350/quality,q_60",
      price: 414100,
      count: 1,
    },
  ];

  return (
    <div className="container cart">
      <div className="col-12 my-60">
        <h1>سبد خرید</h1>
        {products.length &&
          products.map((product, index) => {
            console.log(product);
            return (
              <div
                key={index}
                className="container my-20 py-10 justify-center align-center cart-item"
              >
                <div className="col-1 text-center border-left">
                  <div className="flex justify-center">
                    <Image url={product.image} className="cart__image" />
                  </div>
                </div>
                <div className="col-5 border-right text-center">
                  {product.title}
                </div>
                <div className="col-2 border-right">
                  <p className="text-center">{product.price}</p>
                </div>
                <div className="col-2 border-right">
                  <p className="text-center">{product.count}</p>
                </div>
                <div className="col-2 border-right">
                  <div className="flex justify-center align-center">
                    <button
                      className="cart-item__button"
                      onClick={() => dispatch(addToCart())}
                    >
                      <div className="plus"></div>
                    </button>
                    <button
                      className="cart-item__button"
                      onClick={() => dispatch(removeFromCart())}
                    >
                      <div className="minus"></div>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        <div className="flex justify-center">
          <button className="cart__button">نهایی کردن سبد خرید</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
