import React, { useState } from "react";
import { navigate } from "gatsby-link";
import { Link } from "gatsby";
import "@fontsource/noto-sans-jp/japanese.css";
import Layout from "../components/Layout";

const encode = (data: {
  [x: string]: string | number | boolean;
  "form-name"?: any;
}) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function WvcContact() {
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
      action="/success"
      name="wvccontact"
      method="post"
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
    </form>
  );
}
