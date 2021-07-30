import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import HeaderLogo from "../../assets/images/header-logo.png";
import CartIcon from "../../assets/images/shopping-cart.png";
import { toggleModal } from "../../redux/app/app.actions";
import queryString from "query-string";

function Header({ history }) {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // state of quick search
  const [searchState, setSearchState] = useState({
    timeOut: 0,
    query: "",
  });

  const searchHandler = (e) => {
    // clear timer when type new character
    if (searchState.timeOut) {
      clearTimeout(searchState.timeOut);
    }

    // save old location and add new location to route
    const location = queryString.parse(history.location.search);
    const newLocation = queryString.stringify({
      ...location,
      q: e.target.value,
    });

    // set data for call api after 700ms
    setSearchState({
      ...searchState,
      query: e.target.value,
      timeOut: setTimeout(() => history.replace(`/?${newLocation}`), 700),
    });
  };
  return (
    <header className="header">
      <div className="container align-center header__container">
        <div className="col-5">
          <div className="flex">
            <Link to="/">
              <img
                className="ml-20 max-w100 vertical-bottom"
                src={HeaderLogo}
                alt="digikala-header-logo"
              />
            </Link>
            <input
              className="flex-auto rounded8 header__search"
              placeholder="جستجو در دیجی‌کالا"
              type="text"
              onChange={searchHandler}
            />
          </div>
        </div>
        <div className="col-7">
          <nav className="navbar">
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li className="navbar__list-item">
                <Link to="/cart">سبد خرید</Link>
              </li>
              <li
                className="navbar__list-item navbar-cart"
                onClick={() => dispatch(toggleModal())}
              >
                <div>
                  <img
                    className="navbar-cart__icon"
                    src={CartIcon}
                    alt="digikala-cart"
                  />
                  <p className="navbar-cart__count">{cartData.cartItems}</p>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default withRouter(Header);
