import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";
import Banner from "../components/banner/banner";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <Banner />
    </Layout>
)

export default IndexPage;
