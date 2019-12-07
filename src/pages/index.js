import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Banner from "../components/banner/banner";
import { Projects } from "../components/projects/projects";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Banner />
        <Projects />
    </Layout>
)

export default IndexPage;
