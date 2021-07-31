import React from "react";
import InstagramIcon from "../../assets/images/instagram.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import LinkedinIcon from "../../assets/images/linkedin.svg";
import AparatIcon from "../../assets/images/aparat.svg";

const Footer = () => {
  
  return (
    <footer className="footer py-60">
      <div className="container ">
        <div className="col-8">
          <div className="container">
            <div className="col-4">
              <ul>
                <li className="footer__title">با دیجی‌کالا</li>
                <li className="footer__link">
                  <a href="/">اتاق خبر دیجی‌کالا</a>
                </li>
                <li className="footer__link">
                  <a href="/">فروش در دیجی‌کالا</a>
                </li>
                <li className="footer__link">
                  <a href="/">فرصت های شغلی دیجی‌کالا</a>
                </li>
                <li className="footer__link">
                  <a href="/">تماس با دیجی‌کالا</a>
                </li>
                <li className="footer__link">
                  <a href="/">درباره دیجی‌کالا</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li className="footer__title">خدمات مشتریان</li>
                <li className="footer__link">
                  <a href="/">پاسخ به پرسش‌های متداول</a>
                </li>
                <li className="footer__link">
                  <a href="/">رویه‌های بازگرداندن کالا</a>
                </li>
                <li className="footer__link">
                  <a href="/">شرایط استفاده</a>
                </li>
                <li className="footer__link">
                  <a href="/">حریم خصوصی</a>
                </li>
                <li className="footer__link">
                  <a href="/">گزارش باگ</a>
                </li>
              </ul>
            </div>
            <div className="col-4">
              <ul>
                <li className="footer__title">راهنمای خرید از دیجی‌کالا</li>
                <li className="footer__link">
                  <a href="/">نحوه ثبت سفارش</a>
                </li>
                <li className="footer__link">
                  <a href="/">رویه ارسال سفارش</a>
                </li>
                <li className="footer__link">
                  <a href="/">شیوه‌های پرداخت</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <p className="footer__title">با ما همراه باشید</p>
          <div className="my-10">
            <a href="/">
              <img className="footer__icon" src={InstagramIcon} alt="" />
            </a>
            <a href="/">
              <img className="footer__icon" src={TwitterIcon} alt="" />
            </a>
            <a href="/">
              <img className="footer__icon" src={LinkedinIcon} alt="" />
            </a>
            <a href="/">
              <img className="footer__icon" src={AparatIcon} alt="" />
            </a>
          </div>
          <p className="footer__title mb-20">از جدیدترین تخفیف‌ها باخبر شوید</p>
          <div className="flex">
            <input className="flex-auto footer__email-input" type="text" />
            <button className="mr-10 footer__email-button">ثبت</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
