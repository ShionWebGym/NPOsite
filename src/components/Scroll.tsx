import React, { useState, useEffect } from 'react'
import {
    contactbutton_top,
}from "./Contactbutton.module.scss";
import top from "../images/Arrows.png"




const Scroll = ({showBelow}:{showBelow:any}) => {
  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    } else {
      if (show) setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <div>
      {show && (
        <button onClick={handleClick} id="scrollBtn" aria-label="to top" className={contactbutton_top}>
          <img src={top} alt="矢印の画像" />
        </button>
      )}
    </div>
  )
}
export default Scroll