import React, { useState } from "react";
import { navigate } from "gatsby-link";
import "@fontsource/noto-sans-jp";
import {
  formCheck,
  checkbox,
  formHead,
  inputLabel,
  submitButton,
  formInput,
  formP,
  formSpan,
  formContainer,
} from "../components/Form.module.scss";

const encode = (data: {
  [x: string]: string | number | boolean;
  "form-name"?: any;
}) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Form = () => {
  const [state, setState] = useState({});

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; target: any }) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
    <form
      name="contact"
      method="post"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          {" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>
      <h2 className={formHead}>お問い合わせ内容を選択してください。<span className={formSpan}>※必須</span></h2>
      <div className={formContainer}>
        <label className={formCheck}>
          入会について
          <input
            type="radio"
            name="content"
            value="入会について"
            onChange={handleChange}
            className={checkbox}
            required
          />
        </label>
        <label className={formCheck}>
          WVCセミナーについて
          <input
            type="radio"
            name="content"
            value="WVCセミナーについて"
            onChange={handleChange}
            className={checkbox}
            required
          />
        </label>
        <label className={formCheck}>
          ボランティアについて
          <input
            type="radio"
            name="content"
            value="ボランティアについて"
            onChange={handleChange}
            className={checkbox}
            required
          />
        </label>
        <label className={formCheck}>
          その他
          <input
            type="radio"
            name="content"
            value="その他"
            onChange={handleChange}
            className={checkbox}
            required
          />
        </label>
      </div>
      <p className={formP}>
        <label className={inputLabel}>
          お名前<span className={formSpan}>※</span>
          <br />
        </label>
        <fieldset>
          <legend>Name</legend>
          <input 
          type="text" 
          name="name" 
          className={formInput} 
          placeholder="山田　太郎"
          onChange={handleChange} required />
        </fieldset>
      </p>
      <p className={formP}>
        <label className={inputLabel}>
          フリガナ
          <br />
        </label>
        <fieldset>
          <legend>Kana</legend>
          <input 
          type="text" 
          name="kana" 
          className={formInput} 
          placeholder="ヤマダ　タロウ"
          onChange={handleChange} />
        </fieldset>
      </p>
      <p className={formP}>
        <label className={inputLabel}>
          メールアドレス<span className={formSpan}>※</span>
          <br />
        </label>
        <fieldset>
          <legend>Email</legend>
          <input type="email" name="email" className={formInput} onChange={handleChange} required />
        </fieldset>
      </p>
      <p className={formP}>
        <label className={inputLabel}>
          電話番号
          <br />
        </label>
        <fieldset>
          <legend>Phone</legend>
          <input type="tel" name="phone" className={formInput} onChange={handleChange} />
        </fieldset>
      </p>
      <p className={formP}>
        <label className={inputLabel}>
          お問い合わせ内容<span className={formSpan}>※</span>
          <br />
          <fieldset>
            <legend>Message</legend>
            <textarea
              name="message"
              onChange={handleChange}
              placeholder="例）〇月△日、ハワイ、セミナー参加希望"
              cols={32}
              rows={10}
              className={formInput}
              required
            />
          </fieldset>
        </label>
      </p>
      <p>
        <button type="submit" className={submitButton}>送信する</button>
      </p>
    </form>
  );
};

export default Form;
