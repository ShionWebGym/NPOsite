import React from "react";
import type { FC } from "react";
import { graphql } from "gatsby";
import type { ArticlePageContext } from "../../gatsby-node";
import type { ArticleTemplateQuery } from "../../types/graphql-types";
import "@fontsource/noto-sans-jp";
import Layout from "./Layout";
import {Link} from "gatsby";
import {
  article_container,
  article_title,
  article_date,
  article_body,
  backtotop,
} from "./articles.module.scss";

interface PageProps {
  data: ArticleTemplateQuery;
  pageContext: ArticlePageContext;
}

const Page: FC<PageProps> = ({ data }) => (
  <>
  <title>{data.markdownRemark?.frontmatter?.title ?? "(無題)"}</title>
    <Layout>
      <section className={article_container}>
        <h1 className={article_title}>
          {data.markdownRemark?.frontmatter?.title ?? "(無題)"}
        </h1>
        {data.markdownRemark?.frontmatter?.date && (
          <p className={article_date}>
            {data.markdownRemark.frontmatter.date} 投稿
          </p>
        )}
        <hr />
        <div
          className={article_body}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html ?? "" }}
        />
      </section>
      <Link to="/" className={backtotop}>トップへ戻る</Link>
    </Layout>
  </>
);
export default Page;

export const query = graphql`
  query ArticleTemplate($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD", locale: "ja-JP")
      }
    }
  }
`;

