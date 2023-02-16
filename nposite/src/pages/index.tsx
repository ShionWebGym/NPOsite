import React from "react"
import Layout from "../components/Layout"
import TopImage from "../components/TopImage"
import Section from "../components/Section"
import News from "../components/News"

const BlogPage = () => {
    return (
        <div>
            <Layout>
                <TopImage/>
                <Section/>
                <News/>
            </Layout>
        </div>
    )
}

export default BlogPage