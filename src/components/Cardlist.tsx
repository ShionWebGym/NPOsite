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
  ins,
} from "../components/Cardlist.module.scss";

const Cardlist = () => {
  const data = useStaticQuery<SeminerpickQuery>(graphql`
    query Seminerpick {
      allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { frontmatter: { isSeminer: { ne: false } } }
      ) {
        edges {
          node {
            frontmatter {
              title
              slug
              date(formatString: "YYYY/MM/DD", locale: "ja-JP")
              author
              place
              doctor
              first_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
              isAccepting
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
        <h2>セミナーの最新情報</h2>
        <ul className={cardcontainer}>
          {posts.slice(0, 5).map(({ node }: { node: any }) => {
            const title = node.frontmatter.title;
            const slug = node.frontmatter.slug;
            const date = node.frontmatter.date;
            const img = getImage(
              node.frontmatter.first_image.childImageSharp.gatsbyImageData
            );
            const place = node.frontmatter.place;
            const doctor = node.frontmatter.doctor;
            const isAccepting = node.frontmatter.isAccepting;
            const statusLabel = isAccepting ? "受付中" : "終了";
            const statusClassName = isAccepting ? cardtag_uketukechu : cardtag_uketukesyuryo;
            return (
              <li key={slug} className={ins}>
                <Link to={slug} className={card}>
                  <div className={cardharf}>
                    <GatsbyImage
                      image={img as IGatsbyImageData}
                      alt="Post Image"
                      className={cardharf}
                    />
                    <p className={cardtime}>{date}～</p>
                    <p className={statusClassName}>{statusLabel}</p>
                  </div>
                  <div className={cardharf2}>
                    <h3>開催場所</h3>
                    <p className={cardcontent}>{place}</p>
                    <h3>概要</h3>
                    <p className={cardcontent}>{title}</p>
                    <h3>講師</h3>
                    <ul className={doclist}>
                      {doctor && doctor.map((doctor: string) => (
                        <li key={doctor}>{doctor}</li>
                      ))}
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
