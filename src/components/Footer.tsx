import React from "react"
import { Link } from 'gatsby'
import logo from '../images/logo.png'
import "@fontsource/noto-serif-jp"
import "@fontsource/noto-sans-jp"
import "./total.module.scss";

const Footer =()=>{
    return(
        <footer>
            <div>
                <h3>NPO（特定非営利活動）法人 小動物疾患研究所（理事長小宮山典寛）</h3>
                <p>〒180-0006東京都武蔵野市中町2-6-4（三鷹獣医科グループ内）</p>
                <a href="tel:0422-54-5181">電話：0422-54-5181</a>
                <p>FAX：0422-54-5537</p>
                <Link to="/">メール：お問い合わせ</Link>
                <img src={logo} alt="ロゴ画像" />
            <p><small>
            Copyright © {(new Date()).getFullYear()} 特定非営利活動法人 小動物疾患研究所 All rights Reserved.
            </small></p>
            </div>
        </footer>
    )
}

export default Footer