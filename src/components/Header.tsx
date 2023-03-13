import React, { useEffect } from "react";
import { Link } from "gatsby";
import h1img from "../images/sign.webp";
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
    >
      <h1 className={topImage}>
        <Link to="/">
        <img src={h1img} alt="ヘッダーのサイン画像" />
        </Link>
      </h1>
      <nav className={navLinks}>
        <Menu>
          <MenuButton 
          as={Button} 
          className={button}
          display="block"
          >
            小動物疾患研究所とは
          </MenuButton>
          <MenuList className={dropdown_itemlist}>
            <MenuItem 
            as={Link} to="/Greeting" 
            className={dropdown_item}
            color="white">
            ご挨拶
            </MenuItem>
            <MenuItem 
            as={Link} to="/Meaning" 
            className={dropdown_item}
            color="white">
              趣旨
            </MenuItem>
            <MenuItem 
            as={Link} to="/Teikan" 
            className={dropdown_item}
            color="white">
              定款
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} className={button}
          display="block">
            小動物疾患研究所の活動
          </MenuButton>
          <MenuList className={dropdown_itemlist}>
            <MenuItem as={Link} to="/Wvc" className={dropdown_item}
            color="white">
              WVCセミナー
            </MenuItem>
            <MenuItem as={Link} to="/Study" className={dropdown_item}
            color="white">
              研究発表
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} className={button}
          display="block">
            ご協力のお願い
          </MenuButton>
          <MenuList className={dropdown_itemlist}>
            <MenuItem as={Link} to="/Support" className={dropdown_item}
            color="white">
              ご支援とご協力のお願い
            </MenuItem>
            <MenuItem as={Link} to="/Contact" className={dropdown_item}
            color="white">
              お問い合わせフォーム
            </MenuItem>
          </MenuList>
        </Menu>

        <Link to="/Volunteer" className={button}>
          ボランティア
        </Link>
      </nav>
      <div className={contactContainer}>
        <Link to="/Contact" className={contactButton}>
          お問い合わせ
        </Link>
        <Link to="/Wvc" className={contactButton}>
          WVCセミナー
        </Link>
      </div>
    </header>
  );
};

export default Header;
