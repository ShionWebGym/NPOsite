import Layout from "../components/Layout";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import { Link } from "gatsby";
import React from "react";
import {
    Container,
} from "../components/success.module.scss";
import type { HeadProps } from "gatsby"

const Success = () => {
  return (
    <>
      <div>
        <Layout>
          <div className={Container}>
            <p>
            お問い合わせは正常に送信されました。<br />
            折り返しメールにて、ご連絡させていただきますのでしばらくお待ちください。
            </p>
            <Link to="/">Homeへ戻る</Link>
          </div>
        </Layout>
      </div>
    </>
  );
};

export default Success;

export function Head(props: HeadProps) {
  return (
    <title>送信完了</title>
  )
}
