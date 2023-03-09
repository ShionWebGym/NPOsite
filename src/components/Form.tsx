import React, { useState } from "react";
import { navigate } from "gatsby-link";

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
      <fieldset>
        <legend>お問い合わせ内容を選択してください。※必須</legend>
        <div>
          <input
            type="radio"
            name="content"
            value="入会について"
            onChange={handleChange}
          />
          <label>入会について</label>
          <input
            type="radio"
            name="content"
            value="WVCセミナーについて"
            onChange={handleChange}
          />
          <label>WVCセミナーについて</label>
          <input
            type="radio"
            name="content"
            value="ボランティアについて"
            onChange={handleChange}
          />
          <label>ボランティアについて</label>
          <input
            type="radio"
            name="content"
            value="その他"
            onChange={handleChange}
          />
          <label>その他</label>
        </div>
      </fieldset>
      <p>
        <label>
          お名前
          <br />
          <input type="text" name="name" onChange={handleChange} required />
        </label>
      </p>
      <p>
        <label>
          メールアドレス:
          <br />
          <input type="email" name="email" onChange={handleChange} required />
        </label>
      </p>
      <p>
        <label>
          お問い合わせ内容:
          <br />
          <textarea name="message" onChange={handleChange} required />
        </label>
      </p>
      <p>
        <button type="submit">送信する</button>
      </p>
    </form>
  );
};

export default Form;
