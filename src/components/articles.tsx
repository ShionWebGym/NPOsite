import React from "react";
import type { FC } from "react";
import { graphql } from "gatsby";
import type { ArticlePageContext } from "../../gatsby-node";
import type { ArticleTemplateQuery } from "../../types/graphql-types";
import "@fontsource/noto-sans-jp";
import Layout from "./Layout";
import {
  article_container,
  article_title,
  article_date,
  article_body,
  backtotop,
  backtostudy,
  article_author,
  flex,
} from "./articles.module.scss";
import {Link} from "gatsby";
import Scroll from "../components/Scroll";

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
          <aside className={article_date}>
            {data.markdownRemark.frontmatter.date}
          </aside>
        )}
          <aside className={article_author}>
            筆者：{data.markdownRemark?.frontmatter?.author?? "(無題)"}
          </aside>
        <hr />
        <div
          className={article_body}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark?.html ?? "" }}
        />
      </section>
      <div className={flex}>
        <Link to="/Allnews" className={backtotop}>お知らせ一覧へ</Link>
        <Link to="/Allstudy" className={backtostudy}>論文一覧へ</Link>
      </div>
      <Scroll showBelow={1000} />
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
        author
      }
    }
  }
`;

