import React from "react";
import { pankuzu, } from "./Pankuzu.module.scss";

const Pankuzu = () => {
  return (
    <>
      <div className={pankuzu}>
        <a href="/">ホーム</a>・<a href="/Wvc">WVCセミナー</a>
      </div>
    </>
  );
};

export default Pankuzu;
