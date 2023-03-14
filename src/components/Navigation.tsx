import React from "react";
import { FC } from "react";
import { Link } from "gatsby";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
} from "@chakra-ui/react";
import {
    accordion,
    accordionButton,
    humButton,
}from "./Header.module.scss";

type Props = {
    open: boolean;
    id: string;
  };
  
  export const Navigation: FC<Props> = ({ open, id }) => {
    return (
       <nav id={id} aria-hidden={!open} className={accordion}>
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
          <Link to="/Volunteer">ボランティア</Link>
        </Accordion>
      </nav>
    );
  };