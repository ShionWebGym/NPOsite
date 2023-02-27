import React from "react";
import Layout from "../components/Layout";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import Scroll from "../components/Scroll";
import wvcsemi from "../images/wvcsemi.png";
import {
  Gcontainer,
  pagehead,
  wvcsemi_img,
} from "../components/wvc.module.scss";
import { pankuzu,breadcrumb } from "../components/Pankuzu.module.scss";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import 'gatsby-plugin-breadcrumb/gatsby-plugin-breadcrumb.css';

const Wvc = () => {
  return (
    <>
      <Layout>
        <div className={Gcontainer}>
          <div className={pankuzu}>
            <Breadcrumb
              location={location}
              crumbLabel="WVCセミナー"
              crumbSeparator=" ・ "
              className={breadcrumb}
            />
          </div>
          <div className={pagehead}>
            <img
              src={wvcsemi}
              alt="NPO小動物疾患研究所の定款ページ、猫の写真"
              className={wvcsemi_img}
            />
          </div>
        </div>
        <Scroll showBelow={1000} />
      </Layout>
    </>
  );
};
export default Wvc;
