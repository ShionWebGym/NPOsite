import React from "react";
import topinu from "../images/inu.webp";
import "./total.module.scss";
import { topimage, topdog } from "./TopImage.module.scss";
import {motion} from "framer-motion";

const TopImage = () => {
  return (
    <div className={topimage}>
      <motion.h1
      initial={{opacity:0,y:-100}}
      animate={{opacity:1,y:0}}
      transition={{duration:1.5}}
      >
        動物たちの
        <br />
        未来を担う獣医師に。
        <br />
      </motion.h1>
        <motion.img 
            initial={{
              opacity: 0,y:-100
            }}
            animate={{ opacity: 1,y:-20}}
            transition={{duration:1.5}}
        className={topdog} src={topinu} alt="トップイメージ" />
    </div>
  );
};

export default TopImage;
