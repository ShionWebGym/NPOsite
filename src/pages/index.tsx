import React from "react"
import Layout from "../components/Layout"
import TopImage from "../components/TopImage"
import Section from "../components/Section"
import News from "../components/News"
import Cardlist from "../components/Cardlist"
import AboutCard from "../components/AboutCard"
import Contactbutton from "../components/Contactbutton"
import Scroll from "../components/Scroll"

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

export default BlogPage