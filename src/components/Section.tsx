import React from "react";
import { Link } from "gatsby";
import "@fontsource/noto-sans-jp/japanese.css"
import "./total.module.scss";
import {
  wrapper,
  h2,
  section_list,
  section_list_item,
  section_list_item_link,
  container,
} from "./Section.module.scss";

const Section = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <h2 className={h2}>活動内容について</h2>
        <p>小動物疾患研究所では伴侶動物と人間の様々な問題を解消するべく、以下の活動について募集をしております。</p>
        <ul className={section_list}>
          <li className={section_list_item}>
            <Link to="/Wvc" className={section_list_item_link}>
              セミナー参加者の募集
            </Link>
          </li>
          <li className={section_list_item}>
            <Link to="/Support" className={section_list_item_link}>
              寄附金の募集
            </Link>
          </li>
          <li className={section_list_item}>
            <Link to="/Volunteer" className={section_list_item_link}>
              ボランティアの募集
            </Link>
          </li>
          <li className={section_list_item}>
            <Link to="/Support" className={section_list_item_link}>
              賛助会員の募集
            </Link>
          </li>
        </ul>
      </div>
      {/* <Link to="/Wvc" className={katudou}>
        活動内容について知る
      </Link> */}
    </div>
  );
};

export default Section;
