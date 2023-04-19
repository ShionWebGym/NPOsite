import React from "react";
import { Link } from "gatsby"
import Layout from "../components/Layout";


export default function Allnews() {
    return(
        <>
        <Layout>
            <h1>
                記事一覧
            </h1>
            <p>
                お知らせやブログ記事一覧です。
            </p>
            <div>

            </div>
            <Link to="/">
                トップへ戻る
            </Link>
        </Layout>
        </>
    );
}

