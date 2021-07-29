import React from "react";
import { withRouter } from "react-router-dom";

const Pagination = ({ history, pager }) => {
  const nextPageHandler = () => {
    history.replace(`?page=${pager && pager.current_page + 1}&rows=16`);
  };

  const backPageHandler = () => {
    history.replace(`?page=${pager && pager.current_page - 1}&rows=16`);
  };

  return (
    <div className="flex justify-center mb-40">
      <button
        className={`pagination__button ${
          pager && pager.current_page === 1 && "pagination__button--disabled"
        }`}
        disabled={pager && pager.current_page === 1}
        onClick={backPageHandler}
      >
        <div className="arrow right"></div>
      </button>
      <span className="pagination__number mx-30">
        {pager && pager.current_page ? pager.current_page : 1}
      </span>
      <button
        className={`pagination__button ${
          pager &&
          pager.current_page === pager.total_pages &&
          "pagination__button--disabled"
        }`}
        onClick={nextPageHandler}
      >
        <div className="arrow left"></div>
      </button>
    </div>
  );
};

export default withRouter(Pagination);
