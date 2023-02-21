import React from "react";
import { useEffect, useRef, useState } from "react";
import {navbarSubmenuWrapper} from "../components/Dropdown.module.scss";

const Dropdown = () => {
  
  return (
    <div>
      <ul>
        <li data-menu="menu-1">
          <a href="#">小動物疾患研究所について</a>
          <div id="menu-1" className={navbarSubmenuWrapper}>
            <ul>
              <li>aaaa</li>
              <li>bbbb</li>
            </ul>
          </div>
        </li>
        <li data-menu="menu-2"></li>
        <li data-menu="menu-3"></li>
      </ul>
      <div />
      <ul>
        <li>listitems1</li>
        <li>listitems2</li>
        <li>listitems3</li>
      </ul>
    </div>
  );
};

export default Dropdown;
