import React from "react";
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
  menuButtonContainer,
  menuButton,
  menuToggle,
  accordion,
  accordionButton,
  hidden,
} from "./Header.module.scss";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Header = () => {

  const toggle =()=>{
    let body = document.getElementsByTagName("body")[0];
    const classList = body.classList;
    classList.toggle(`${hidden}`);
}


  return (
    <header className={container}>
      <h1 className={topImage}>
        <Link to="/">
          <img src={h1img} alt="ヘッダーのサイン画像" />
        </Link>
      </h1>
      <input id="menuToggle" type="checkbox" className={menuToggle}
             onClick={toggle}/>
      <label className={menuButtonContainer} htmlFor="menuToggle">
        <div className={menuButton}></div>
      </label>

      <nav className={navLinks}>
        <Menu>
          <MenuButton as={Button} className={button} display="block">
            小動物疾患研究所とは
          </MenuButton>
          <MenuList className={dropdown_itemlist}>
            <MenuItem
              as={Link}
              to="/Greeting"
              className={dropdown_item}
              color="white"
            >
              ご挨拶
            </MenuItem>
            <MenuItem
              as={Link}
              to="/Meaning"
              className={dropdown_item}
              color="white"
            >
              趣旨
            </MenuItem>
            <MenuItem
              as={Link}
              to="/Teikan"
              className={dropdown_item}
              color="white"
            >
              定款
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} className={button} display="block">
            小動物疾患研究所の活動
          </MenuButton>
          <MenuList className={dropdown_itemlist}>
            <MenuItem
              as={Link}
              to="/Wvc"
              className={dropdown_item}
              color="white"
            >
              WVCセミナー
            </MenuItem>
            <MenuItem
              as={Link}
              to="/Study"
              className={dropdown_item}
              color="white"
            >
              研究発表
            </MenuItem>
          </MenuList>
        </Menu>

        <Menu>
          <MenuButton as={Button} className={button} display="block">
            ご協力のお願い
          </MenuButton>
          <MenuList className={dropdown_itemlist}>
            <MenuItem
              as={Link}
              to="/Support"
              className={dropdown_item}
              color="white"
            >
              ご支援とご協力のお願い
            </MenuItem>
            <MenuItem
              as={Link}
              to="/Contact"
              className={dropdown_item}
              color="white"
            >
              お問い合わせフォーム
            </MenuItem>
          </MenuList>
        </Menu>

        <Link to="/Volunteer" className={button}>
          ボランティア
        </Link>
      </nav>
      <nav className={accordion}>
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton className={accordionButton}>
                <Box as="span" flex="1" textAlign="left">
                  小動物疾患研究所とは
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel as={Link} to="/Greeting" pb={20}>
              ご挨拶
            </AccordionPanel>
            <AccordionPanel as={Link} to="/Meaning" pb={4}>
              趣旨
            </AccordionPanel>
            <AccordionPanel as={Link} to="/Teikan" pb={4}>
              定款
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={accordionButton}>
                <Box as="span" flex="1" textAlign="left">
                  小動物疾患研究所の活動
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel as={Link} to="/Wvc" pb={4}>
              WVCセミナー
            </AccordionPanel>
            <AccordionPanel as={Link} to="/Study" pb={4}>
              研究発表
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton className={accordionButton}>
                <Box as="span" flex="1" textAlign="left">
                  ご協力のお願い
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel as={Link} to="/Support" pb={4}>
              ご支援とご協力のお願い
            </AccordionPanel>
            <AccordionPanel as={Link} to="/Contact" pb={4}>
              お問い合わせフォーム
            </AccordionPanel>
          </AccordionItem>
          <h2>
            <Link to="/Volunteer">ボランティア</Link>
          </h2>
          <h2>
            <Link to="/Contact" className={contactButton}>
              お問い合わせ
            </Link>
          </h2>
          <h2>
            <Link to="/Wvc" className={contactButton}>
              WVCセミナー
            </Link>
          </h2>
        </Accordion>
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
