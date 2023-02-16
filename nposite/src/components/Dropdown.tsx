import React from "react";
import { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const inputElement = useRef(null);
  console.log(inputElement.current)
  return (
    <>
        <input ref={inputElement.current} type="text" />
      <ul>
        <li>listitems1</li>
        <li>listitems2</li>
        <li>listitems3</li>
      </ul>
    </>
  );
};

export default Dropdown;
