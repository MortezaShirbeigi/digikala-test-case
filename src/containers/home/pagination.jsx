import React from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";

const Pagination = ({ history, pager }) => {
  const nextPageHandler = () => {
    // save old location and add new location to route
    const location = queryString.parse(history.location.search);
    const newLocation = queryString.stringify({
      ...location,
      page: pager && pager.current_page + 1,
      row: 16,
    });

    history.replace(`?${newLocation}`);
  };

  const backPageHandler = () => {
    // save old location and add new location to route
    const location = queryString.parse(history.location.search);
    const newLocation = queryString.stringify({
      ...location,
      page: pager && pager.current_page - 1,
      row: 16,
    });

    history.replace(`?${newLocation}`);
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
