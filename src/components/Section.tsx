import React from "react";
import { Link } from "gatsby";
import "@fontsource/noto-sans-jp";
import "./total.module.scss";
import { wrapper, h2, katudou, container } from "./Section.module.scss";

const Section = () => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <h2 className={h2}>
          人と動物が平和に共存・共生できる
          <br />
          豊かな地域社会の形成を目指します。
        </h2>
      </div>
      <Link to="/Study" className={katudou}>活動内容について知る</Link>
    </div>
  );
};

export default Section;
