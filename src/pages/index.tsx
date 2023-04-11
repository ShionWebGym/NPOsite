import React from "react"
import Layout from "../components/Layout"
import TopImage from "../components/TopImage"
import Section from "../components/Section"
import News from "../components/News"
import Cardlist from "../components/Cardlist"
import AboutCard from "../components/AboutCard"
import Contactbutton from "../components/Contactbutton"
import Scroll from "../components/Scroll"
import { graphql } from "gatsby"
import type { HeadProps } from "gatsby"

const BlogPage = () => {
    return (
        <div>
            <Layout>
                <TopImage/>
                <Section/>
                <News/>
                <Cardlist/>
                <AboutCard/>
                <Contactbutton/>
                <Scroll showBelow={2000} />
            </Layout>
        </div>
    )
}
export const query=graphql`
query MyQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
export default BlogPage

export function Head(props: HeadProps) {
  return (
    <>
    <title>小動物疾患研究所</title>
    <meta name="description" content="小動物疾患研究所のWEBサイトです。私たちが飼育している伴侶動物も犬、猫をはじめとして、ウサギやハムスター、カメなどその種類も多様化しています。しかし、家族の一員としての伴侶動物が増えている一方で、様々な問題を抱えていることもまた事実であります。" />
    </>
  )
}