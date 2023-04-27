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
    footer_list,
    footer_link,
} from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className={container}>
          <ul>
            <Link to="/" className={footer_link}><li className={footer_list}>ホーム</li></Link>
            <Link to="/" className={footer_link}><li className={footer_list}>ご挨拶</li></Link>
            <Link to="/" className={footer_link}><li className={footer_list}>趣旨</li></Link>
            <Link to="/" className={footer_link}><li className={footer_list}>定款</li></Link>
            <Link to="/" className={footer_link}><li className={footer_list}>WVCセミナー</li></Link>
            <Link to="/" className={footer_link}><li className={footer_list}>研究発表</li></Link>
            <Link to="/" className={footer_link}><li className={footer_list}>ご支援とご協力のお願い</li></Link>
            <Link to="/" className={footer_link}><li className={footer_list}>お問い合わせ</li></Link>
            <Link to="/" className={footer_link}><li className={footer_list}>ボランティア</li></Link>
          </ul>
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
