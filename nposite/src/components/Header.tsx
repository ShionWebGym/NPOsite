import React, { useEffect } from "react";
import { Link } from "gatsby";
import h1img from "../images/sign.png";
import "@fontsource/noto-serif-jp";
import "modern-css-reset";
import "./total.module.scss";
import {
  container,
  navLinks,
  button,
  topImage,
  contactButton,
  contactContainer,
} from "./Header.module.scss";

const Header = () => {
  return (
    <header className={container}
    data-sal="slide-down"
    data-sal-delay="300"
    data-sal-easing="ease"
    >
      <h1 className={topImage}>
        <img src={h1img} alt="ヘッダーのサイン画像" />
      </h1>
      <nav className={navLinks}>
        <Link to="/about" className={button}>
          小動物疾患研究所とは
        </Link>

        <Link to="/" className={button}>
          小動物疾患研究所の活動
        </Link>

        <Link to="/" className={button}>
          ご協力のお願い
        </Link>

        <Link to="/" className={button}>
          募集
        </Link>
      </nav>
      <div className={contactContainer}>
        <Link to="/" className={contactButton}>
          お問い合わせ
        </Link>
        <Link to="/" className={contactButton}>
          WVCセミナー
        </Link>
      </div>
    </header>
  );
};

export default Header;
