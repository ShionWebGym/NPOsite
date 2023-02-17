import React from "react"
import Layout from "../components/Layout"
import TopImage from "../components/TopImage"
import Section from "../components/Section"
import News from "../components/News"
import Cardlist from "../components/Cardlist"

const BlogPage = () => {
    return (
        <div>
            <Layout>
                <TopImage/>
                <Section/>
                <News/>
                <Cardlist/>
            </Layout>
        </div>
    )
}

export default BlogPage