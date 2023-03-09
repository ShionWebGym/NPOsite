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
import Form from "../components/Form";

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
          <Form></Form>
        </Layout>
      </div>
    </>
  );
};

export default Contact;
