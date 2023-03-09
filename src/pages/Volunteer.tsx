import Layout from "../components/Layout";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import Scroll from "../components/Scroll";
import { Link } from "gatsby";
import { pankuzu } from "../components/Pankuzu.module.scss";
import {
  Gcontainer,
  pagehead,
  Gh1,
  studyImgStyle,
  volunteerContainer,
} from "../components/Volunteer.module.scss";
import React from "react";
import contactImg from "../images/contact.webp";

const Volunteer = () => {
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
              <h1 className={Gh1}>ボランティア</h1>
              <img
                src={contactImg}
                alt="ご協力のお願い、猫の写真"
                className={studyImgStyle}
              />
            </div>
          </div>
          <div className={volunteerContainer}>
            <h2>ボランティアについて</h2>
            <p>
              小動物疾患研究所の「ボランティア」とは、小動物疾患研究所で行われている動物の病気の成り立ちの研究、その活動に賛同し、研究に参加してくださる方で、自由な時間にボランティアとしての活動をしていただく方のことです。個人・法人を問わず、どなたでもボランティアになる資格があります。
            </p>
            <Link to="/Contact">詳しくはお問い合わせください。</Link>
          </div>
          <Scroll showBelow={700} />
        </Layout>
      </div>
    </>
  );
};

export default Volunteer;
