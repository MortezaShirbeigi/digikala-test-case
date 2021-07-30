import React from "react";
import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { getData } from "../../utilities/requests";
import Pagination from "./pagination";
import ProductList from "./productList";
import FilterProducts from "./filterProducts";

const Home = ({ history }) => {
  const [productList, setProductList] = useState([]);

  const getProductList = async (url) => {
    try {
      const data = await getData(url);
      setProductList(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // first request
    getProductList(
      history.location.search
        ? `search/${history.location.search}`
        : "/search/?page=1&rows=16"
    );
  }, [history.location.search]);

  return (
    <>
      <div
        style={{ width: "100%", minHeight: "500px", backgroundColor: "#000" }}
      ></div>
      <FilterProducts />
      <ProductList products={productList.products} />
      <Pagination pager={productList.pager} />
    </>
  );
};

export default withRouter(Home);
