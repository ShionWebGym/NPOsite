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
              alt="NPO小動物疾患研究所の定款ページ、猫の写真"
              className={wvcsemi_img}
            />
          </div>
        </div>
        <div>
          <div>
            <Link to="/">
              <div>
                <img src={semiimg} alt="セミナー写真" />
                <aside>最新のセミナーの概要など</aside>
              </div>
              <div>
                <p>What's New about seminar</p>
                <h2>セミナーの最新情報</h2>
                <div className={arrow}></div>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/">
              <div>
                <img src={toform} alt="お問い合わせの写真" />
                <aside>お申込みについてはこちら</aside>
              </div>
              <div>
                <p>Application form</p>
                <h2>お申込み</h2>
                <div className={arrow}></div>
              </div>
            </Link>
          </div>

          <div>
            <div>
              <Link to="/">
                <div>
                  <img src={volunteer} alt="協賛のお願い" />
                  <aside>
                    小動物疾患研究所はご協力いただける企業様を募集中です。
                  </aside>
                </div>
                <div>
                  <p>Locking for sponsors</p>
                  <h2>協賛のお願い</h2>
                  <div className={arrow}></div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/">
                <div>
                  <img src={donesemi} alt="協賛のお願い" />
                  <aside>セミナー受講特典やその他お得情報</aside>
                </div>
                <div>
                  <p>Finished seminar</p>
                  <h2>終了したセミナー</h2>
                  <div className={arrow}></div>
                </div>
              </Link>
            </div>
            <div>
              <Link to="/">
                <div>
                  <img src={other} alt="協賛のお願い" />
                  <aside>小動物疾患研究所はご協力いただける企業様を募集中です。</aside>
                </div>
                <div>
                  <p>Accredited hospital system, etc.</p>
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
