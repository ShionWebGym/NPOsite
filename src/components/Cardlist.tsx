import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import type { SeminerpickQuery } from "../../types/graphql-types";
import "./total.module.scss";
import {
  container,
  cardcontainer,
  card,
  cardharf,
  doclist,
  cardtag_uketukechu,
  cardtag_uketukesyuryo,
  cardtime,
  cardharf2,
  cardcontent,
  aftercard,
  cardImage1,
  cardImage2,
  cardImage3,
  ins,
} from "../components/Cardlist.module.scss";

const Cardlist = () => {
  const data = useStaticQuery<SeminerpickQuery>(graphql`
    query Seminerpick{
      allMarkdownRemark(
        sort: { frontmatter: {date: DESC} }
        filter: {frontmatter: {isStudy:{ne:true}}}){
          edges{
            node {
              frontmatter {
                title
                slug
                date(formatString: "YYYY/MM/DD", locale: "ja-JP")
                author
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
      <div className={container}>
        <h2>これから開催予定のセミナー</h2>
        <ul className={cardcontainer}>
          {posts.slice(0, 5).map(({ node }: { node: any }) => {
            const title = node.frontmatter.title;
            const slug = node.frontmatter.slug;
            const date = node.frontmatter.date;
            const img = getImage(
              node.frontmatter.first_image.childImageSharp.gatsbyImageData
            );
            return (
              <li key={slug} className={ins}>
                <Link to={slug} className={card}>
                  <div className={cardharf}>
                  <GatsbyImage
                      image={img as IGatsbyImageData}
                      alt="Post Image"
                      className={cardharf} 
                      />
                    <p className={cardtime}>{date}</p>
                    <p className={cardtag_uketukechu}>受付中</p>
                  </div>
                  <div className={cardharf2}>
                    <h3>開催場所</h3>
                    <p className={cardcontent}>台湾某所（20人限定）</p>
                    {/* ↑↑↑内容を書く */}
                    <h3>内容</h3>
                    <p className={cardcontent}>
                      {title}
                    </p>
                    {/* ↑↑↑費用を書く */}
                    <h3>講師</h3>
                    <ul className={doclist}>
                      <li>Dr.William Culp, VMD, DACVS</li>
                      <li>Dr. Jim Perry, DVM. phD ,ACVIM ,ACVS</li>
                      <li>Dr. Ameet Singh . BSc, DVM, DVSc, ACVS</li>
                      <li>久保田朋子先生（通訳）</li>
                      {/* ↑↑↑講師を書く（講師の数に応じてliを増やしたり減らす） */}
                    </ul>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to="https://forms.gle/rMesaQ4hTZJYF8gT6" className={aftercard}>
          お申込みはこちら
        </Link>
      </div>
    </>
  );
};
export default Cardlist;
