import React from "react";
import "@fontsource/noto-sans-jp";
import "./total.module.scss";
import { wrapper, h2 } from "./Section.module.scss";

const Section = () => {
  return (
    <div>
      <div className={wrapper}>
        <h2 className={h2}>
          人と動物が平和に共存・共生できる
          <br />
          豊かな地域社会の形成を目指します。
        </h2>
      </div>
    </div>
  );
};

export default Section;
