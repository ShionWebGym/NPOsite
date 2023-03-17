import Layout from "../components/Layout";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import {
  Gcontainer,
  pagehead,
  Gh1,
  studyImgStyle,
} from "../components/Study.module.scss";
import React from "react";
import contactImg from "../images/contact.webp";
import Form from "../components/Form";
import type { HeadProps } from "gatsby"

const Contact = () => {
  return (
    <>
      <div>
        <Layout>
          <div className={Gcontainer}>
            <div className={pagehead}>
              <h1 className={Gh1}>お問い合わせ</h1>
              <img
                src={contactImg}
                alt="ご協力のお願い、猫の写真"
                className={studyImgStyle}
              />
            </div>
          </div>
          <Form></Form>
        </Layout>
      </div>
    </>
  );
};

export default Contact;

export function Head(props: HeadProps) {
  return (
    <>
    <title>お問い合わせページ</title>
    <meta name="description" content="小動物疾患研究所へのお問い合わせページです。フォームに必要な情報を入力し送信してください。お問い合わせへのご連絡はしばらくお待ちください。" />
    </>
  )
}
