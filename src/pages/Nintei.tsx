import Layout from "../components/Layout";
import { Link } from "gatsby";
import React from "react";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import {
  Gcontainer,
  syusidog_image,
  Gh1,
  greetingText,
  Gh2,
  Gh22,
  textContainer,
  pagehead,
  backtobtn,
} from "../components/Nintei.module.scss";
import nintei from "../images/nintei.webp";
import syusidog from "../images/趣旨-犬.webp";
import Scroll from "../components/Scroll";
import type { HeadProps } from "gatsby";

export default function Nintei() {
  return (
    <>
      <Layout>
        <div className={Gcontainer}>
          <div className={pagehead}>
            <h1 className={Gh1}>認定病院制度について</h1>
            <img
              src={syusidog}
              alt="NPO小動物疾患研究所の趣旨ページ、犬の写真"
              className={syusidog_image}
            />
          </div>
        </div>
        <div className={greetingText}>
          <h2 className={Gh2}>
            WVC獣医師外科セミナー参加病院の認定病院制度について
          </h2>
          <div className={textContainer}>
            <aside>認定病院制度</aside>
            <p>
              　このWVC獣医師外科セミナーは外科手術のマスタースタンダードとしての位置付けとして、過去に同一動物病院にて、3回以上（9日間以上―72時間以上））参加の動物病院には「認定病院」を、7回以上（21日間以上―168時間以上））の参加の動物病院には、「優良認定病院」と認定させていただきます。
            </p>
            <img src={nintei} alt="認定制度のロゴ画像" />

            <h3>
              特定非営利活動法人　小動物疾患研究所　認定動物病院基準「3つの基本の基準」
            </h3>
            <p>
              　1）外科手術の実習9日間（72時間以上）の技術の習得
              <br />
              　2）50種類以上の外科手術の習得と復習による技術の向上
              <br />
              　3）欧米の外科専門医との交流を通じての向上心の養い
              <br />
            </p>

            <h3>
              特定非営利活動法人　小動物疾患研究所　優良認定動物病院基準「5つの基本の基準」
            </h3>
            <p>
              　1）外科手術の実習21日間（168時間以上）の技術の習得
              <br />
              　2）120種類以上の外科手術の習得と復習による技術の向上
              <br />
              　3）欧米の外科専門医との交流を通じての向上心の養い
              <br />
              　4）外科手術のエキスパートを目指せる体験を実感
              <br />
              　5）西部獣医師会議との交流を通じて最新の獣医学を習得
              <br />
            </p>

            <h3>動物病院における、外科手術の学び方の考察</h3>
            <p>
              　1）
              まずは基本である、糸結び、縫合などの手術手技を確実に訓練すること。
              <br />
              　2） 関連する部位の解剖学（名前と起始部と停止部と支配神経）を学ぶ
              <br />
              　3）
              手術に関連する、講演を聞き自身の経験と照らし合わせて理解する。
              <br />
              　4）
              自身の動物病院の手術関連の機器の使用法とメンテ法を覚えること。
              <br />
              　5）
              手術の成書を2冊以上読んで、全体像を把握し応用可能か考えること。
              <br />
              　6）
              手術の成り立ちの絵や写真を見て神経支配を考えて正しい手順を覚えること。
              <br />
              　7）
              手術の動画を3回以上みて、重要事項を再確認してその流れを掴むこと。
              <br />
              　8）
              機会あれば、その手術の助手（前立ち、第一助手）を務めることが望ましい。
              <br />
              　9）
              できれば遺体によって,その部位の手術の予行練習を行って実際の感覚を掴む。
              <br />
              　10）
              手術の15分前には、麻酔器の点検をして異常がないか再確認すること。
              <br />
            </p>

            <p>
              <small>
                *動物病院はできうれば冷凍庫を設置して、予め遺体を保存しておくこと。
                外科手術即、麻酔であり麻酔管理なくして外科手術はないが、外科手術の前には内科管理があり、外科手術後にも内科管理がある。外科医である前に内科医であることも必要と思われる。
              </small>
            </p>
          </div>
        </div>
        <Link to="/" className={backtobtn}>
          TOPへ戻る
        </Link>
        <Scroll showBelow={700} />
      </Layout>
    </>
  );
}

export function Head(props: HeadProps) {
  return (
    <>
      <title>認定病院制度について</title>
      <meta
        name="description"
        content="WVCセミナーにおける、認定病院制度をご紹介しています。"
      />
    </>
  );
}
