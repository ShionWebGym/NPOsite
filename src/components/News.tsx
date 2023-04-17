import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import type { NewspostQuery } from '../../types/graphql-types';
import "./total.module.scss";
import {
  container,
  h2,
  h2Container,
  newslistchild,
  newscontainer,
  newsList,
} from "./News.module.scss";

const News = () => {
  const data = useStaticQuery<NewspostQuery>(graphql`
  query Newspost{
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "YYYY/MM/DD", locale: "ja-JP")
          }
        }
      }
    }
  }
  `);

  const posts = data.allMarkdownRemark.edges;
  return (
    <>
      <div className={container}>
        <div className={h2Container}>
          <h2 className={h2}>
            お知らせ・セミナー開催<span>🐶</span>
          </h2>
        </div>
        <div className={newscontainer}>
          <ul className={newsList}>
            {posts.slice(0, 3).map(({ node }: { node: any }) => {
              const title = node.frontmatter.title;
              const slug = node.frontmatter.slug;
              const date = node.frontmatter.date;
              return (
                <li key={slug}>
                  <Link to={slug} className={newslistchild}>
                    <h4>お知らせ</h4>
                    <p>{date}</p>
                    <h3>{title}</h3>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default News;
