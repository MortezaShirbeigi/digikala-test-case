import React from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

const FilterProducts = ({ history }) => {
  const filterHandler = (sortId) => {
    console.log(history.location.search);

    if (history.location.search) {
      const location = queryString.parse(history.location.search);
      const newLocation = queryString.stringify({ ...location, sort: sortId });
      history.replace(`?${newLocation}`);
    } else {
      history.replace(`?sort=${sortId}`);
    }
  };

  return (
    <div className="flex justify-center my-20">
      <button className="filter__button" onClick={() => filterHandler("4")}>
        بیشترین بازدید‌ها
      </button>
      <button className="filter__button" onClick={() => filterHandler("22")}>
        پیشنهاد مشابه
      </button>
      <button className="filter__button" onClick={() => filterHandler("27")}>
        پیشنهاد مشتریان
      </button>
    </div>
  );
};

export default withRouter(FilterProducts);
