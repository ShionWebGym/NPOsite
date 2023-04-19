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
}from "./Contactbutton.module.scss";
import mail from "../images/mail.png";
import seminer from "../images/seminer.png";

const Contactbutton =()=>{
    return(
        <>
        <div className={Contactbutton_container}>
            <div className={contactbutton_flex}>
            <Link to="/Contact" className={contactbutton}>お問い合わせボタン<span><img src={mail} alt="メールのアイコン" className={contact_logo} /></span></Link>
            <Link to="/Wvc" className={contactbutton}>WVCセミナー<span><img src={seminer} alt="セミナーのアイコン" className={contact_logo} /></span></Link>
            </div>
            <p className={contactbutton_p}>入会方法や寄付の仕方について等、お気軽にお問い合わせください。</p>
        </div>
        </>
    );
}

export default Contactbutton;