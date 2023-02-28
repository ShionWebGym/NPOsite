import React from "react";
import Layout from "../components/Layout";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import Scroll from "../components/Scroll";
import wvcsemi from "../images/wvcsemi.png";
import {
  Gcontainer,
  pagehead,
  wvcsemi_img,
  arrow,
  semiMenuContainer_up,
  semiMenuContainer_down,
  semiMenu_semi,
  semiMenu_form,
  semiMenu_vol,
  semiMenu_donesemi,
  semiMenu_other,
  semiMenuContainer,
  semiMenu_Link,
  flex,
} from "../components/wvc.module.scss";
import { pankuzu } from "../components/Pankuzu.module.scss";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import { Link } from "gatsby";
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css";
import semiimg from "../images/semiimg.webp";
import toform from "../images/toform.webp";
import other from "../images/other.webp";
import donesemi from "../images/donesemi.webp";
import volunteer from "../images/volunteer.webp";
import { useEffect, useState } from "react";

const Wvc = () => {

  return (
    <>
      <Layout>
        <div className={Gcontainer}>
          <div className={pankuzu}>
            <Breadcrumb
              location={location}
              crumbLabel="WVCセミナー"
              crumbSeparator="・"
              style={{ fontSize: `16px`, padding: `8px` }}
            />
          </div>

          <div className={pagehead}>
            <img
              src={wvcsemi}
              alt="WVCセミナートップイメージ"
              className={wvcsemi_img}
            />
          </div>
        </div>
        <div className={semiMenuContainer}>
          <div className={semiMenuContainer_up}>
            <div className={semiMenu_semi}>
              <Link to="http://samri.intellectual-japan.com/wvc_plans.html" className={semiMenu_Link}>
                <div>
                  <img src={semiimg} alt="セミナー写真" />
                  <aside>最新のセミナーの概要など</aside>
                  <p>What's New about seminar</p>
                </div>
                <div className={flex}>
                  <h2>セミナーの最新情報</h2>
                  <div className={arrow}></div>
                </div>
              </Link>
            </div>
            <div className={semiMenu_form}>
              <Link to="http://samri.intellectual-japan.com/2020_form.html" className={semiMenu_Link}>
                <div>
                  <img src={toform} alt="お問い合わせの写真" />
                  <aside>お申込みについてはこちら</aside>
                  <p>Application form</p>
                </div>
                <div className={flex}>
                  <h2>お申込み</h2>
                  <div className={arrow}></div>
                </div>
              </Link>
            </div>
          </div>

          <div className={semiMenuContainer_down}>
            <div className={semiMenu_vol}>
              <Link to="http://samri.intellectual-japan.com/volunteer.html" className={semiMenu_Link}>
                <div>
                  <img src={volunteer} alt="協賛のお願い" />
                  <aside>
                    小動物疾患研究所はご協力いただける企業様を募集中です。
                  </aside>
                  <p>Locking for sponsors</p>
                </div>
                <div className={flex}>
                  <h2>協賛のお願い</h2>
                  <div className={arrow}></div>
                </div>
              </Link>
            </div>
            <div className={semiMenu_donesemi}>
              <Link to="http://samri.intellectual-japan.com/201806info.html" className={semiMenu_Link}>
                <div>
                  <img src={donesemi} alt="終了したセミナー" />
                  <aside>セミナー受講特典やその他お得情報</aside>
                  <p>Finished seminar</p>
                </div>
                <div className={flex}>
                  <h2>終了したセミナー</h2>
                  <div className={arrow}></div>
                </div>
              </Link>
            </div>
            <div className={semiMenu_other}>
              <Link to="http://samri.intellectual-japan.com/nintei.html" className={semiMenu_Link}>
                <div>
                  <img src={other} alt="その他" />
                  <aside>認証病院制度について、その他のこと</aside>
                  <p>Accredited hospital system, etc.</p>
                </div>
                <div className={flex}>
                  <h2>認証病院制度、その他</h2>
                  <div className={arrow}></div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Scroll showBelow={1000} />
      </Layout>
    </>
  );
};
export default Wvc;
