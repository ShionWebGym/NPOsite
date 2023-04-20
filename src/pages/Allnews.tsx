import *as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage,getImage,IGatsbyImageData } from 'gatsby-plugin-image';
import type { AllnewspostQuery } from "../../types/graphql-types";
import "@fontsource/noto-serif-jp";
import "@fontsource/noto-sans-jp";
import Layout from "../components/Layout";
import {
  morebtn,
  container,
  allnews_h1,
  allnews_p,
  allnews_head,
  allnews_list,
  allnews_container,
  allnews_link,
  allnews_aside,
  allnews_h2,
  allnews_para,
  allnews_boxx,
  allnews_img,
  flex,
  arrow,
} from "../components/Allnews.module.scss";
import type { HeadProps } from "gatsby";

export default function Allnews() {
  const data = useStaticQuery<AllnewspostQuery>(graphql`
    query Allnewspost {
      allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "YYYY/MM/DD", locale: "ja-JP")
              description
              first_image{
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      <Layout>
        <div className={container}>
          <div className={allnews_head}>
            <h1 className={allnews_h1}>記事一覧</h1>
            <p className={allnews_p}>お知らせやブログ記事一覧です。</p>
            <hr />
          </div>
        </div>

        <div className={allnews_container}>
          <ul className={allnews_boxx}>
            {posts.map(({ node }: { node: any }) => {
              const title = node.frontmatter.title;
              const slug = node.frontmatter.slug;
              const date = node.frontmatter.date;
              const img = getImage(node.frontmatter.first_image.childImageSharp.gatsbyImageData);
              const desc = node.frontmatter.description;

              return (
                <li key={slug} className={allnews_list}>
                  <Link to={slug} className={allnews_link}>
                    <div>
                      <GatsbyImage
                      image={img as IGatsbyImageData}
                      alt="Post Image"
                      className={allnews_img} 
                      />
                      <aside className={allnews_aside}>{desc}</aside>
                      <p className={allnews_para}>{date}</p>
                    </div>
                    <div className={flex}>
                      <h1 className={allnews_h2}>{title}</h1>
                      <div className={arrow}></div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <Link to="/" className={morebtn}>
          トップへ戻る
        </Link>
      </Layout>
    </>
  );
}

export function Head(props: HeadProps) {
  return (
    <>
      <title>記事一覧</title>
      <meta
        name="description"
        content="配信されたお知らせなどの記事一覧ページです。"
      />
    </>
  );
}
