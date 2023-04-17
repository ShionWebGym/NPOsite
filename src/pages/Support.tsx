import Layout from "../components/Layout";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import {
  Gcontainer,
  pagehead,
  Gh1,
  supportContainer,
  supportImgCat,
} from "../components/Support.module.scss";
import React from "react";
import supportImg from "../images/support.webp";
import Scroll from "../components/Scroll";
import type { HeadProps } from "gatsby"
import { Link } from "gatsby";

const Support = () => {
  return (
    <>
      <div>
        <Layout>
          <div className={Gcontainer}>
            <div className={pagehead}>
              <h1 className={Gh1}>ご協力のお願い</h1>
              <img
                src={supportImg}
                alt="ご協力のお願い、猫の写真"
                className={supportImgCat}
              />
            </div>
          </div>
          <div className={supportContainer}>
            <h2>小型動物の疾患解明のためのご協力とご支援のお願い</h2>
            <p>
              小動物疾患研究所では、当法人の目的に賛同し、「正会員」として法人運営活動に参加していただける方、及び「賛助会員」として当活動をご支援していただける方を随時募集しております。また、皆様からのご寄付を募る計画をしております。準備が整い次第、告知させていただきます。
            </p>
            <h4>会費</h4>
            <aside>
              【入会金】
              <br />
              正会員 個人０円／団体０円
              <br />
              賛助会員 個人０円／団体０円
              <br />
              【年会費】
              <br />
              正会員 個人5,000円／団体50,000円
              <br />
              賛助会員 個人一口あたり2,000円／団体一口あたり10,000円
            </aside>
            <h4>お申込み方法</h4>
            <Link to="/Contact">
              会員登録フォームよりご登録ください
            </Link>
            <p>
              下記の入会申込書によるFAX、郵送による申し込みも可能です。
              <br />
              お申込みの確認が取れ次第、事務局より会費振込に関する資料を送付いたします。
            </p>
            <a href="http://samri.intellectual-japan.com/_userdata/enrollment_form.pdf">
              入会申込書PDFファイルはこちら
            </a>
          </div>
          <Scroll showBelow={700} />
        </Layout>
      </div>
    </>
  );
};

export default Support;

export function Head(props: HeadProps) {
  return (
    <>
    <title>ご支援とご協力のお願い</title>
    <meta name="description" content="小動物疾患研究所では、当法人の目的に賛同し、「正会員」として法人運営活動に参加していただける方、及び「賛助会員」として当活動をご支援していただける方を随時募集しております。また、皆様からのご寄付を募る計画をしております" />
    </>
  )
}
