import React from "react";
import "@fontsource/noto-sans-jp";
import "./total.module.scss";
import {
  container,
  h2,
  h2Container,
  newslistchild,
} from "./News.module.scss";

const News = () => {
  return (
    <>
      <div className={container}>
        <div className={h2Container}>
          <h2 className={h2}>
            お知らせ・セミナー開催<span>🐼🐼</span>
          </h2>
        </div>
        <div>
          <div className={newslistchild}>
            <h4>お知らせ</h4>
            <p>2023/02/16</p>
            <h3>セミナー開催について</h3>
          </div>
          <div className={newslistchild}>
            <h4>お知らせ</h4>
            <p>2023/02/16</p>
            <h3>セミナー開催について</h3>
          </div>
          <div className={newslistchild}>
            <h4>お知らせ</h4>
            <p>2023/02/16</p>
            <h3>セミナー開催について</h3>
          </div>
        </div>
      </div>
    </>
  );
};
export default News;
