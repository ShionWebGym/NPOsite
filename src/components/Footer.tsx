import React from "react";
import { Link } from "gatsby";
import logo from "../images/logo.webp";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import "./total.module.scss";
import {
    container,
    flogo,
    copyright,
    fcontact,
} from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className={container}>
          <h3>
            NPO（特定非営利活動）法人 小動物疾患研究所（理事長小宮山典寛）
          </h3>
          <p className={fcontact}>〒180-0006</p>
          <p className={fcontact}>東京都武蔵野市中町2-6-4（三鷹獣医科グループ内）</p>
          <a href="tel:0422-54-5181" className={fcontact}>電話：0422-54-5181</a>
          <p className={fcontact}>FAX：0422-54-5537</p>
          <Link to="/Contact" className={fcontact}>メール：お問い合わせ</Link>
        </div>
        <img src={logo} className={flogo} alt="ロゴ画像" />
        <p className={copyright}>
          <small>
            © {new Date().getFullYear()} 小動物疾患研究所
          </small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
