import React from "react";
import { Link } from "gatsby";
import "./total.module.scss";
import {
  container,
  cardcontainer,
  card,
  cardharf,
  doclist,
  cardtag,
  cardtime,
  cardharf2,
  cardcontent,
  aftercard,
} from "../components/Cardlist.module.scss";

const Cardlist = () => {
  return (
    <>
      <div className={container}>
        <h2>これから開催予定のセミナー</h2>
        <div className={cardcontainer}>
          <Link to="/" className={card}>
            <div className={cardharf}>
              {/* <img src={topinu} alt="犬のしゃしん" /> */}
              <p className={cardtime}>2021年9月3日</p>
              <p className={cardtag}>受付終了</p>
            </div>
            <div className={cardharf2}>
              <h3>内容</h3>
              <p className={cardcontent}>皮膚皮弁系、再建手術、頭部（開頭術）の外科</p>
              <h3>費用</h3>
              <p className={cardcontent}>286,000円（26名様限定）</p>
              <h3>講師</h3>
              <ul className={doclist}>
                <li>Dr.William Culp, VMD, DACVS</li>
                <li>Dr. Jim Perry, DVM. phD ,ACVIM ,ACVS</li>
                <li>Dr. Ameet Singh . BSc, DVM, DVSc, ACVS</li>
                <li>久保田朋子先生（通訳）</li>
              </ul>
            </div>
          </Link>
          <Link to="/" className={card}>
            <div className={cardharf}>
              {/* <img src={topinu} alt="犬のしゃしん" /> */}
              <p className={cardtime}>2021年9月3日</p>
              <p className={cardtag}>受付終了</p>
            </div>
            <div className={cardharf2}>
              <h3>内容</h3>
              <p className={cardcontent}>皮膚皮弁系、再建手術、頭部（開頭術）の外科</p>
              <h3>費用</h3>
              <p className={cardcontent}>286,000円（26名様限定）</p>
              <h3>講師</h3>
              <ul className={doclist}>
                <li>Dr.William Culp, VMD, DACVS</li>
                <li>Dr. Jim Perry, DVM. phD ,ACVIM ,ACVS</li>
                <li>Dr. Ameet Singh . BSc, DVM, DVSc, ACVS</li>
                <li>久保田朋子先生（通訳）</li>
              </ul>
            </div>
          </Link>
          <Link to="/" className={card}>
            <div className={cardharf}>
              {/* <img src={topinu} alt="犬のしゃしん" /> */}
              <p className={cardtime}>2021年9月3日</p>
              <p className={cardtag}>受付終了</p>
            </div>
            <div className={cardharf2}>
              <h3>内容</h3>
              <p className={cardcontent}>皮膚皮弁系、再建手術、頭部（開頭術）の外科</p>
              <h3>費用</h3>
              <p className={cardcontent}>286,000円（26名様限定）</p>
              <h3>講師</h3>
              <ul className={doclist}>
                <li>Dr.William Culp, VMD, DACVS</li>
                <li>Dr. Jim Perry, DVM. phD ,ACVIM ,ACVS</li>
                <li>Dr. Ameet Singh . BSc, DVM, DVSc, ACVS</li>
                <li>久保田朋子先生（通訳）</li>
              </ul>
            </div>
          </Link>
        </div>
        <Link to="/" className={aftercard}>終了したセミナーはこちら</Link>
      </div>
    </>
  );
};
export default Cardlist;
