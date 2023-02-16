import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import Dropdown from "../components/Dropdown";

export default function AboutPage() {
  return (
    <div>
      <Layout>
        <h1>About Page</h1>
        <ul>
          <li>
            <Link to="/about">ご挨拶</Link>
          </li>
          <li>
            <Link to="/">趣旨</Link>
          </li>
          <li>
            <Link to="/">定款</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">WVCセミナー</Link>
          </li>
          <li>
            <Link to="/">研究発表</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">ご協力とご支援のお願い</Link>
          </li>
          <li>
            <Link to="/">お問い合わせフォーム</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/">ボランティア</Link>
          </li>
        </ul>
        <Dropdown />
      </Layout>
    </div>
  );
}
