import React from "react";
import { Link } from "react-router-dom";
import HeaderLogo from "../../assets/images/header-logo.png";
import CartIcon from "../../assets/images/shopping-cart.svg";

function Header() {
  return (
    <header className="header">
      <div className="container align-center header__container">
        <div className="col-6">
          <div className="flex">
            <img
              className="ml20 max-w100 vertical-bottom"
              src={HeaderLogo}
              alt="digikala-header-logo"
            />
            <input className="flex-auto rounded8 header__search" type="text" />
          </div>
        </div>
        <div className="col-6">
          <nav className="navbar">
            <ul className="navbar__list">
              <li className="navbar__list-item">
                <Link to="/">صفحه اصلی</Link>
              </li>
              <li className="navbar__list-item">
                <Link to="/cart">سبد خرید</Link>
              </li>
              <li className="navbar__list-item">
                <img className="navbar__list-icon" src={CartIcon} alt="" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
