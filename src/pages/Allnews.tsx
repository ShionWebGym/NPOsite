import React from "react";
import { Link } from "gatsby";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import Layout from "../components/Layout";
import {
  morebtn,
  container,
  allnews_h1,
  allnews_p,
  allnews_head,
  allnews_list,
  allnews_container,
  allnews_link,
  allnews_aside,
  allnews_h2,
  allnews_para,
  flex,
  arrow,
} from "../components/Allnews.module.scss";
import type { HeadProps } from "gatsby";
import other from "../images/other.webp";

export default function Allnews() {
  return (
    <>
      <Layout>
        <div className={container}>
          <div className={allnews_head}>
            <h1 className={allnews_h1}>記事一覧</h1>
            <p className={allnews_p}>お知らせやブログ記事一覧です。</p>
            <hr />
          </div>
        </div>

        <div className={allnews_container}>
          <div className={allnews_list}>
            <Link to="/post0" className={allnews_link}>
              <div>
                <img src={other} alt="a" />
                <aside className={allnews_aside}>aaaaaa</aside>
                <p className={allnews_para}>ニュースニュースニュース</p>
              </div>
              <div className={flex}>
                <h2 className={allnews_h2}>セミナーの最新情報</h2>
                <div className={arrow}></div>
              </div>
            </Link>
          </div>
        </div>

        <Link to="/" className={morebtn}>
          トップへ戻る
        </Link>
      </Layout>
    </>
  );
}

export function Head(props: HeadProps) {
  return (
    <>
      <title>記事一覧</title>
      <meta
        name="description"
        content="配信されたお知らせなどの記事一覧ページです。"
      />
    </>
  );
}
