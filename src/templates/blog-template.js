/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import { Container, Grid } from '@material-ui/core';

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;
    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <Container>
                <Grid container>
                    <Grid item md={10} lg={8}>
                        <h1>{frontmatter.title}</h1>
                        <h2>{frontmatter.date}</h2>
                        <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
        }
    }
  }
`;

Template.propTypes = {
    data: PropTypes.instanceOf(pageQuery).isRequired,
};
