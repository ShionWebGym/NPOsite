import React from "react";
import { useEffect, useRef, useState } from "react";
import {navbarSubmenuWrapper} from "../components/Dropdown.module.scss";

const Dropdown = () => {
  const inputElement = useRef(null);
  console.log(inputElement.current);

  document.addEventListener("DOMContentLoaded", () => {
    DropdownMenu.init();
  });

  /**
   * ドロップダウンメニュー
   * constructor
   * @param {HTMLElement} elem 開くための要素
   * @property {HTMLElement} button 開くための要素
   * @property {HTMLElement} target 開閉される要素
   * @property {number} contentHeight サブメニューの高さ
   */
  function DropdownMenu(this: any, elem: Element) {
    this.button = elem;

    const targetId = this.button.dataset.menu;
    this.target = document.getElementById(targetId);

    const content = this.target.children[0];
    this.contentHeight = content.clientHeight;

    this.handleEvent();
  }

  /**
   * イベント登録
   */
  DropdownMenu.prototype.handleEvent = function () {
    // マウスオーバーで開く
    this.button.addEventListener("mouseover", this.open.bind(this));

    // マウスアウトで閉じる
    this.button.addEventListener("mouseout", this.close.bind(this));
    
  };

  /**
   * 開く
   */
  DropdownMenu.prototype.open = function () {
    this.target.style.height = this.contentHeight + "px";
  };

  /**
   * 閉じる
   */
  DropdownMenu.prototype.close = function () {
    this.target.style.height = "0";
  };

  /**
   * 初期化
   */
  DropdownMenu.init = function () {
    const menus = document.querySelectorAll("[data-menu]");
    // menus.forEach((menu) => new DropdownMenu(menu));
  };
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
      <input ref={inputElement.current} type="text" />
      <ul>
        <li>listitems1</li>
        <li>listitems2</li>
        <li>listitems3</li>
      </ul>
    </div>
  );
};

export default Dropdown;
