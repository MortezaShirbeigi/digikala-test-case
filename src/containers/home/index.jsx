import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../../utilities/requests";
import ProductList from "./productList";

const Home = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getData("search/?page=1&rows=16");
      setProductList(data);
    })();
  }, []);

  return (
    <>
      <div
        style={{ width: "100%", minHeight: "500px", backgroundColor: "#000" }}
      ></div>
      <ProductList products={productList.products} />
    </>
  );
};

export default Home;
