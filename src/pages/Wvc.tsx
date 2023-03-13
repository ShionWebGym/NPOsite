import React from "react";
import Layout from "../components/Layout";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import Scroll from "../components/Scroll";
import wvcsemi from "../images/wvcsemi.webp";
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
  semiContainer,
  semiContainer2,
  semiSmall,
  semiNews,
  wvc2021,
  wvc2021img,
  kome,
  semiHead,
  semiSmallContainer,
  span,
  specialContainer,
  bold,
} from "../components/wvc.module.scss";
import { pankuzu } from "../components/Pankuzu.module.scss";
import { Link } from "gatsby";
import "gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css";
import semiimg from "../images/semiimg.webp";
import toform from "../images/toform.webp";
import other from "../images/other.webp";
import donesemi from "../images/donesemi.webp";
import volunteer from "../images/volunteer.webp";
import wvcsemia from "../images/wvcsemia.webp";
import oquend from "../images/oquend.webp";
import type { HeadProps } from "gatsby"

const Wvc = () => {
  return (
    <>
      <Layout>
        <div className={Gcontainer}>
          <div className={pankuzu}></div>

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
              <Link
                to="http://samri.intellectual-japan.com/wvc_plans.html"
                className={semiMenu_Link}
              >
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
              <Link
                to="http://samri.intellectual-japan.com/2020_form.html"
                className={semiMenu_Link}
              >
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
              <Link
                to="http://samri.intellectual-japan.com/volunteer.html"
                className={semiMenu_Link}
              >
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
              <Link
                to="http://samri.intellectual-japan.com/201806info.html"
                className={semiMenu_Link}
              >
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
              <Link
                to="http://samri.intellectual-japan.com/nintei.html"
                className={semiMenu_Link}
              >
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
        <div className={semiContainer}>
          <div className={semiHead}>
            <p className={semiSmall}>WVC主催のセミナーとはー</p>
            <p className={semiNews}>
              ※コロナウイルス感染症の影響により延期・開催日未定
            </p>
            <h3>2021年「WVC獣医師外科セミナー」のご案内</h3>
          </div>
          <div className={wvc2021}>
            <p>
              ― WVC（西部獣医会議）継続教育、オクエンドセンターでの実習ラボ ―
              Dr. William Culp 、Dr. Jim Perry、Dr. Ameet
              Singhのセミナー開催概要
            </p>
            <p className={kome}>※WVC大会開催の日程変更を受けて変更いたします</p>
            <p>日程：2021年9月3日（金）-5日（日）</p>
            <p>
              内容：Dr. William Culp 、Dr. Jim Perry、Dr. Ameet Singhのセミナー
              皮膚皮弁系、再建手術、頭部（開頭術）の外科
            </p>
            <p>お申込締切日：最終締め切り 2021年8月28日(土)</p>
          </div>
          <img
            src={wvcsemia}
            alt="WVC獣医師外科セミナーの写真"
            className={wvc2021img}
          />
          <aside>＜企画・運営＞</aside>
          <a href="http://samri.intellectual-japan.com/index.html">
            特定非営利活動法人 小動物疾患研究所 理事長小宮山典寛
          </a>
          <aside>＜後援＞</aside>
          <a href="https://h-j-s.jp/index.shtml">有限会社スピリッツHJS事務局</a>
          <a href="http://jvemctc.intellectual-japan.com/">
            日本獣医救急医療研究会
          </a>
          <a href="http://www.vets.or.tv/jvccs/">
            日本獣医クリティカルケア&マネージメント研究会
          </a>
          <aside>＜特別協賛＞</aside>
          <a href="https://vetzpetz.jp/">株式会社VandP（VetzPetz）</a>
          <a href="https://www.ahmics.com/company/index.html">
            ペットコミュニケーションズ株式会社
          </a>
          <aside>＜協賛＞</aside>
          <a href="https://www.terucom.co.jp/">テルコム株式会社</a>
          <div className={semiContainer2}>
            <p>
              2021年Western Veterinary Conference (WVC)大会の日程変更について
              2021年9月6日（月）-9日（木） September 6-9, 2021.
            </p>
            <p>
              2021年度の大会開催は例年通り、2月14日（日）～17日（水）開催とアナウンスされていましたが、コロナ感染の流行や風邪の影響を考慮し、2021年のみ日程を変更するとの発表がありました。新しい日程は、2021年9月6日（月）～9日（木）開催です。この大会はOquendo
              Centerの大会と、同時にオンラインセミナーの配信も予定されています。
            </p>
            <p>
              そのため特定非営利活動法人、小動物疾患研究所が行う、日本人外科セミナーもその直前の9月3日（金）～5日（日）に変更されました。ゆえにWVCのすべての大会への参加も可能となります。
            </p>
            <p>
              春から秋への開催日の変更は2021年のみであり、2022年は例年の通り、マンダリンベイにて3月6（日）～9日（木）に行われる予定です。この頃にはコロナウィルス感染症の影響が克服されているとの予測の上での開催です。{" "}
            </p>
          </div>
          <img
            src={oquend}
            alt="WVC(西部獣医会議)の施設内であるオクオクエンドセンター"
          />
          <h3>「WVC獣医師外科セミナー」について</h3>
          <p className={semiSmallContainer}>
            この
            <span className={span}>
              <a href="https://www.viticusgroup.org/splash">
                WVC（西部獣医会議）
              </a>
            </span>
            の施設内であるオクエンドセンターで行う、外科の実習セミナーは過去にも私がコーディネートし行って来た経緯がありますが、WVCに参加した獣医師の有志から、<span className={bold}>兎角海外セミナーに在りがちな利権とならないように、より広く公開し、より進化した形で、セミナーの無駄を省き、より効果的に、獣医師が主体となり誰もが参加しやすい形式で行うことが出来ないか</span>と相談されたのを契機に、私はルビコン川を渡る決意をしました。そして、その方式はNPO方式ならば、公明正大に行えるであろうと考え、発足させたものです。
          </p>
          <p className={specialContainer}>
            米国のラスベガスで行われるWVC（西部獣医会議）は現在米国で最大規模の獣医師の団体であり、毎年3月に年次大会が行われております。
            また「WVC獣医師外科セミナー」はWVCの継続教育の一環として、日本人獣医師のために、英語での講演の場合は、日本語の通訳付きで行われるものです。<br />
            この施設は獣医学教育（大学を除いて）においては、全米唯一の教育のための専門の組織（ゆえにネバタ州の獣医師免許の試験会場に指定）、<span>ＷＶＣの厳格な動物倫理の基準（安楽死された遺体を使用等）に沿って運営され、且つ獣医学の安全対策に配慮して運営されています。</span>
          </p>
          <p className={semiSmallContainer}>
            企画・運営：特定非営利活動法人 小動物疾患研究所（理事長小宮山典寛）
            <br />
            東京都武蔵野市中町2-6-4（三鷹獣医科グループ内）
            <br />
            電話：0422-54-5181
            <br />
            メール：
            <span className={span}>
              <a href="http://samri.intellectual-japan.com/contact.html">
                お問い合わせ
              </a>
            </span>
          </p>
        </div>
        <Scroll showBelow={1000} />
      </Layout>
    </>
  );
};
export default Wvc;

export function Head(props: HeadProps) {
  return (
    <>
    <title>WVCセミナーについて</title>
    <meta name="description" content="米国のラスベガスで行われるWVC（西部獣医会議）は現在米国で最大規模の獣医師の団体であり、毎年3月に年次大会が行われております。 また「WVC獣医師外科セミナー」はWVCの継続教育の一環として、日本人獣医師のために、英語での講演の場合は、日本語の通訳付きで行われるものです。" />
    </>
    
  )
}
