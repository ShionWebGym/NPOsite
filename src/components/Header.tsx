import React, { useEffect } from "react";
import { Link } from "gatsby";
import h1img from "../images/sign.png";
import "@fontsource/noto-serif-jp";
import "modern-css-reset";
import "./total.module.scss";
import {
  container,
  navLinks,
  button,
  topImage,
  contactButton,
  contactContainer,
  dropdown_item,
  dropdown_itemlist,
} from "./Header.module.scss";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <header
      className={container}
      data-sal="slide-down"
      data-sal-delay="300"
      data-sal-easing="ease"
    >
      <h1 className={topImage}>
        <img src={h1img} alt="ヘッダーのサイン画像" />
      </h1>
      <nav className={navLinks}>
        <Menu>
          <MenuButton as={Button} className={button}>
            小動物疾患研究所とは
          </MenuButton>
          <MenuList className={dropdown_itemlist}>
            <MenuItem as="a" href="/" className={dropdown_item}>
              ご挨拶
            </MenuItem>
            <MenuItem as="a" href="/" className={dropdown_item}>
              趣旨
            </MenuItem>
            <MenuItem as="a" href="/" className={dropdown_item}>
              定款
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} className={button}>
            小動物疾患研究所の活動
          </MenuButton>
          <MenuList className={dropdown_itemlist}>
            <MenuItem as="a" href="/" className={dropdown_item}>
              WVCセミナー
            </MenuItem>
            <MenuItem as="a" href="/" className={dropdown_item}>
              研究発表
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} className={button}>
            ご協力のお願い
          </MenuButton>
          <MenuList className={dropdown_itemlist}>
            <MenuItem as="a" href="/" className={dropdown_item}>
              ご支援とご協力のお願い
            </MenuItem>
            <MenuItem as="a" href="/" className={dropdown_item}>
              お問い合わせフォーム
            </MenuItem>
          </MenuList>
        </Menu>

        <Link to="/" className={button}>
          募集
        </Link>
      </nav>
      <div className={contactContainer}>
        <Link to="/" className={contactButton}>
          お問い合わせ
        </Link>
        <Link to="/" className={contactButton}>
          WVCセミナー
        </Link>
      </div>
    </header>
  );
};

export default Header;
