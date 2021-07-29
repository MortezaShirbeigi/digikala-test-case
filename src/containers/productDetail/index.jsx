import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "../../components/image";
import { getDiscount, numberWithCommas } from "../../utilities";
import LinkeIcon from "../../assets/images/like.svg";
import { useParams, withRouter } from "react-router-dom";
import Loading from "../../components/loading";

const ProductDetail = ({ history }) => {
  const [product, setProduct] = useState(null);

  let { id } = useParams();

  // call api for get product detail
  const getProductDetail = async () => {
    try {
      const res = await axios.get(
        `https://www.digikala.com/front-end/product/${id}/`,
        {
          headers: {
            token: "mpfKW9ghVTCSuBZ7qTkSmEyvL38ShZxv",
          },
        }
      );

      setTimeout(() => {
        setProduct(res.data.data.product);
      }, 1000);
    } catch (error) {
      console.log("Product Detail Error", error);

      setTimeout(() => {
        history.push("/");
      }, 1000);
    }
  };

  useEffect(() => {
    getProductDetail();
  });

  console.log(product);

  return product ? (
    <div className="container my-60">
      <div className="col-4">
        <Image
          className="max-w100"
          url={product.images.main}
          alt={product.title}
        />
      </div>
      <div className="col-8 p-30">
        <h1 className="product-detail__title">{product.title}</h1>
        <div className="my-20">
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
          <button className="product-detail__button">افزودن به سبد خرید</button>
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
