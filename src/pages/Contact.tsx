import Layout from "../components/Layout";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import { pankuzu } from "../components/Pankuzu.module.scss";
import {
  Gcontainer,
  pagehead,
  Gh1,
  studyImgStyle,
} from "../components/Study.module.scss";
import React from "react";
import contactImg from "../images/contact.webp";
import { useState, useEffect, useRef } from "react";

const Contact = () => {
  return (
    <>
      <div>
        <Layout>
          <div className={Gcontainer}>
            <div className={pankuzu}>
              {/* <Breadcrumb
  location={location}
  crumbLabel="ご挨拶"
  crumbSeparator="・"
  style={{ fontSize: `16px`, padding: `8px` }}
/> */}
            </div>
            <div className={pagehead}>
              <h1 className={Gh1}>お問い合わせ</h1>
              <img
                src={contactImg}
                alt="ご協力のお願い、猫の写真"
                className={studyImgStyle}
              />
            </div>
          </div>
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                お名前: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                メールアドレス: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                お問い合わせ内容を選択してください。:{" "}
                <select name="role[]" multiple>
                  <option value="leader">入会について</option>
                  <option value="follower">WVCセミナーについて</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                お問い合わせ内容: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">送信する</button>
            </p>
          </form>
        </Layout>
      </div>
    </>
  );
};

export default Contact;
