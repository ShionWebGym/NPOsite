import React from "react";
import {Link} from "gatsby";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import {
    Contactbutton_container,
    contactbutton,
    contactbutton_flex,
    contact_logo,
    contactbutton_p,
    contactbutton_top,
}from "./Contactbutton.module.scss";
import mail from "../images/mail.png";
import seminer from "../images/seminer.png";
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Contactbutton =()=>{
    return(
        <>
        <div className={Contactbutton_container}>
            <div className={contactbutton_flex}>
            <OutboundLink href="/Contact" className={contactbutton}>お問い合わせボタン<span><img src={mail} alt="メールのアイコン" className={contact_logo} /></span></OutboundLink>
            <OutboundLink href="/Wvc" className={contactbutton}>WVCセミナー<span><img src={seminer} alt="セミナーのアイコン" className={contact_logo} /></span></OutboundLink>
            </div>
            <p className={contactbutton_p}>入会方法や寄付の仕方について等、お気軽にお問い合わせください。</p>
            {/* <button className={contactbutton_top}></button> */}
        </div>
        </>
    );
}

export default Contactbutton;