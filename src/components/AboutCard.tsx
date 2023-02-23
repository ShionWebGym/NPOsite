import React from "react";
import { Link } from "gatsby";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";

import {
  Aboutcard_h2,
  Aboutcard_container,
  Aboutcard_h3,
  Aboutcard_p,
  Aboutcard,
  Aboutcard_harf,
  Aboutcard_container2,
  Aboutcard_link,
} from "./Aboutcard.module.scss";

const AboutCard = () => {
  return (
    <>
      <div className={Aboutcard_container}>
        <div className={Aboutcard_container2}>
          <h2 className={Aboutcard_h2}>研究発表</h2>
          <div className={Aboutcard}>
            <div className={Aboutcard_harf}></div>
            <div>
              <h3 className={Aboutcard_h3}>小動物の疾患について</h3>
              <p className={Aboutcard_p}>
                1. 犬の椎間板ヘルニアにつて<br></br>
                2. 犬の前十字靭帯断裂について<br></br>
                3.犬の膝蓋骨内側の脱臼について<br></br> 
                4. 猫の尿管閉塞について <br></br>
                5.猫の最適な食事とは？ -Coming soon- <br></br>
                6. 猫の最適な飲水とは？ ...<br></br>
              </p>
              <Link to="/" className={Aboutcard_link}>
                もっと見る
              </Link>
            </div>
          </div>
        </div>
        <div className={Aboutcard_container2}>
          <h2 className={Aboutcard_h2}>ご挨拶</h2>
          <div className={Aboutcard}>
            <div className={Aboutcard_harf}></div>
            <div>
              <h3 className={Aboutcard_h3}>理事長　小宮山典寛</h3>
              <p className={Aboutcard_p}>
                伴侶動物は近年私たちの生活の中に欠かせない存在となりつつあります過去１０年間に何らかの伴侶動物を飼育していた人（現在飼っている人も含む）は、国民の半数を超えるという統計結果も出ています。...
              </p>
              <Link to="/Greeting" className={Aboutcard_link}>
                もっと見る
              </Link>
            </div>
          </div>
        </div>
        <div className={Aboutcard_container2}>
          <h2 className={Aboutcard_h2}>支援のお願い</h2>
          <div className={Aboutcard}>
            <div className={Aboutcard_harf}></div>
            <div>
              <h3 className={Aboutcard_h3}>疾患解明のため役立てられます</h3>
              <p className={Aboutcard_p}>
                小動物疾患研究所では、皆様からのご寄付を随時募集しています。ご都合や希望にあった形でご支援をお願いいたします。
              </p>
              <Link to="/" className={Aboutcard_link}>
                もっと見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
