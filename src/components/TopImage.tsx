import React from "react";
import topinu from "../images/inu.jpg";
import "./total.module.scss";
import { topimage, topdog } from "./TopImage.module.scss";

const TopImage = () => {
  return (
    <div className={topimage}>
      <h1>
        動物たちの
        <br />
        未来を担う
        <br />
        獣医師に。
        <br />
      </h1>
      <section>
        <img className={topdog} src={topinu} alt="トップイメージ" />
      </section>
    </div>
  );
};

export default TopImage;
