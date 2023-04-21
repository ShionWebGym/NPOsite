import React from "react";
import { Link } from "gatsby";
import "./total.module.scss";
import {
  container,
  cardcontainer,
  card,
  cardharf,
  doclist,
  cardtag_uketukechu,
  cardtag_uketukesyuryo,
  cardtime,
  cardharf2,
  cardcontent,
  aftercard,
  cardImage1,
  cardImage2,
  cardImage3,
} from "../components/Cardlist.module.scss";

const Cardlist = () => {
  return (
    <>
      <div className={container}>
        <h2>これから開催予定のセミナー</h2>
        <div className={cardcontainer}>

          {/* 最新のセミナー情報カード↓↓↓ */}
          <Link to="/post0" className={card}>
            <div className={cardharf} id={cardImage1}>
              <p className={cardtime}>2023年4月23日</p>
              <p className={cardtag_uketukechu}>受付中</p>
            </div>
            <div className={cardharf2}>
              <h3>開催場所</h3>
              <p className={cardcontent}>台湾某所（20人限定）</p>
                                          {/* ↑↑↑内容を書く */}
              <h3>内容</h3>
              <p className={cardcontent}>皮膚皮弁系、再建手術、頭部（開頭術）の外科</p>
                                          {/* ↑↑↑費用を書く */}
              <h3>講師</h3>
              <ul className={doclist}>
                <li>Dr.William Culp, VMD, DACVS</li>
                <li>Dr. Jim Perry, DVM. phD ,ACVIM ,ACVS</li>
                <li>Dr. Ameet Singh . BSc, DVM, DVSc, ACVS</li>
                <li>久保田朋子先生（通訳）</li>
                {/* ↑↑↑講師を書く（講師の数に応じてliを増やしたり減らす） */}
              </ul>
            </div>
          </Link>
          {/* 最新のセミナー情報カード↑↑↑ */}

          {/* 二番目に新しいセミナー情報カード↓↓↓ */}
          <Link to="/post0" className={card}>
            <div className={cardharf} id={cardImage2}>
              <p className={cardtime}>2021年9月3日</p>
              <p className={cardtag_uketukechu}>受付中</p>
            </div>
            <div className={cardharf2}>
              <h3>開催場所</h3>
              <p className={cardcontent}>アメリカ某所</p>
                                          {/* ↑↑↑内容を書く */}
              <h3>内容</h3>
              <p className={cardcontent}>皮膚皮弁系、再建手術、頭部（開頭術）の外科</p>
                                         {/* ↑↑↑費用を書く */}
              <h3>講師</h3>
              <ul className={doclist}>
                <li>Dr.William Culp, VMD, DACVS</li>
                <li>Dr. Jim Perry, DVM. phD ,ACVIM ,ACVS</li>
                <li>Dr. Ameet Singh . BSc, DVM, DVSc, ACVS</li>
                <li>久保田朋子先生（通訳）</li>
                {/* ↑↑↑講師を書く（講師の数に応じてliを増やしたり減らす）※７名まで */}
              </ul>
            </div>
          </Link>
          {/* 二番目に新しいセミナー情報カード↑↑↑ */}

          {/* 三番目に新しいセミナー情報カード↓↓↓ */}
          <Link to="/post0" className={card}>
            <div className={cardharf} id={cardImage3}>
              <p className={cardtime}>2021年9月3日</p>
              <p className={cardtag_uketukesyuryo}>受付終了</p>
            </div>
            <div className={cardharf2}>
              <h3>開催場所</h3>
              <p className={cardcontent}>東京都内某所</p>
                                          {/* ↑↑↑内容を書く */}
              <h3>内容</h3>
              <p className={cardcontent}>皮膚皮弁系、再建手術、頭部（開頭術）の外科</p>
                                         {/* ↑↑↑費用を書く */}
              <h3>講師</h3>
              <ul className={doclist}>
                <li>Dr.William Culp, VMD, DACVS</li>
                <li>Dr. Jim Perry, DVM. phD ,ACVIM ,ACVS</li>
                <li>Dr. Ameet Singh . BSc, DVM, DVSc, ACVS</li>
                <li>久保田朋子先生（通訳）</li>
               {/* ↑↑↑講師を書く（講師の数に応じてliを増やしたり減らす） */}
              </ul>
            </div>
          </Link>
          {/* 三番目に新しいセミナー情報カード↑↑↑ */}

        </div>
        <Link to="/Contact" className={aftercard}>お申込みはこちら</Link>
      </div>
    </>
  );
};
export default Cardlist;
