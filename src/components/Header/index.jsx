import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/images/header-logo.png";
import CartIcon from "../../assets/images/shopping-cart.png";

function Header() {
  const cartData = useSelector((state) => state.cart);

  console.log(cartData);

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
            <input className="flex-auto rounded8 header__search" type="text" />
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
              <li className="navbar__list-item navbar-cart">
                <img className="navbar-cart__icon" src={CartIcon} alt="" />
                <p className="navbar-cart__count">{cartData.cartItems}</p>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
