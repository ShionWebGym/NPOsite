import React from "react";
import "./total.module.scss";
import { topimage, top_text_box,background } from "./TopImage.module.scss";
import { motion } from "framer-motion";
import "@fontsource/noto-sans-jp/japanese.css"

const TopImage = () => {
  return (
    <div className={topimage}>
      <div className={top_text_box}>
        <motion.h1
          initial={{ opacity: 0, x:40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          人と伴侶動物をめぐる<br />数々の問題の解消
          <br />
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          ・意識向上を図る指導と教育の広報
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2}}
        >
          ・医療従事者の知識の向上を目指します。
        </motion.h2>
      </div>
      {/* <motion.img
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ duration: 1 }}
        className={topdog}
        src={topinu}
        alt="トップイメージ"
      /> */}
      <motion.div className={background}
              initial={{
                opacity: 0,
                y: 0,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              >

      </motion.div>
    </div>
  );
};

export default TopImage;
