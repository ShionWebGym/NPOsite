import React from "react";
import Layout from "../components/Layout";
import {
  Gcontainer,
  syusidog_image,
  Gh1,
  greetingText,
  Gh2,
  Gh22,
  textContainer,
  pagehead,
} from "../components/Meaning.module.scss";
import syusidog from "../images/趣旨-犬.webp";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import Scroll from "../components/Scroll";
import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css';
import type { HeadProps } from "gatsby"
import {Link} from "gatsby"


const Meaning = () => {
  return (
    <>
      <Layout>
        <div className={Gcontainer}>
          <div className={pagehead}>
            <h1 className={Gh1}>趣旨</h1>
            <img
              src={syusidog}
              alt="NPO小動物疾患研究所の趣旨ページ、犬の写真"
              className={syusidog_image}
            />
          </div>
        </div>
        <div className={greetingText}>
          <h2 className={Gh2}>１．設立の趣旨</h2>
          <div className={textContainer}>
            <aside>
              －家族の一員としての伴侶動物が増えている一方で、様々な問題を抱えていることもまた事実です－
            </aside>
            <p>伴侶動物は近年私たちの生活の中に欠かせない存在となりつつあります。過去１０年間に何らかの伴侶動物を飼育していた人（現在飼っている人も含む）は、国民の半数を超えるという統計結果も出ています。
              <br />
              また飼育している伴侶動物も犬、猫をはじめとして、ウサギやハムスター、カメなどその種類も多様化しています。しかし、家族の一員としての伴侶動物が増えている一方で、様々な問題を抱えていることもまた事実であります。
            </p>
            <p>
              　当法人は、広く一般市民に対して、小動物の疾患についての調査・研究及び結果の公表に関する事業、小動物の疾患についての調査・研究・治療等を行う個人・団体等への支援・協力に関する事業、獣医療に携わる人材の育成及びその支援に関する事業、病気の疾病が関係する、人と動物の関係に関する研究ついての啓発及び推進に関する事業、動物の適正な飼養についての普及・啓発・推進に関する事業を行い、動物と人間が安心安全に共生できる豊かな地域社会の形成を図り、もって広く公益に寄与することを目的とし、社会に貢献していきたいと考えております。{" "}
            </p>
            <h2 className={Gh22}>２．申請に至るまでの経緯</h2>
            <p>
              　平成２５年６月１３日午後１時より
              発起人会を開き、設立の趣旨、定款、会費及び財産、平成２５年度及び平成２６年度の事業計画、活動予算、役員の案を審議し決定した。平成２５年６月２０日午後１時より
              設立総会を開き、発起人より設立の趣旨、定款、会費及び財産、平成２５年度及び平成２６年度の事業計画、活動予算、役員の案を提案し、審議の上決定した。
            </p>
            <p>
              特定非営利活動法人 小動物疾患研究所（理事長小宮山典寛
              <br />
              内閣府認定NPO：法人番号2012405003038
              <br />
              <a href="https://www.npo-homepage.go.jp/npoportal/detail/013010784">
                https://www.npo-homepage.go.jp/npoportal/detail/013010784
              </a>
              <br />
              設立認証年月日：2013年11月12日<br/>東京都武蔵野市中町2-6-4（三鷹獣医科グループ内）
              <br />
              電話：0422-54-5181 メール：<Link to="/Contact">お問い合わせ</Link>
            </p>
          </div>
        </div>
        <Scroll showBelow={700} />
      </Layout>
    </>
  );
};

export default Meaning;

export function Head(props: HeadProps) {
  return (
    <>
    <title>趣旨</title>
    <meta name="description" content="NPO法人 小動物疾患研究所設立の趣旨をご紹介しています。" />
    </>
  )
}
