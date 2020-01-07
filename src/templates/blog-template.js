/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { Container, Grid } from '@material-ui/core';
import { Layout } from '../layout/layout';
import SEO from '../components/seo/seo';
import { Carousel } from '../components/carousel/carousel';
import style from './blog-template.module.scss';
import { Tools } from '../components/tools/tools';
import { Contact } from '../components/contact/contact';

export const Template = ({ data }) => {
    const { markdownRemark } = data;
    const { frontmatter, html } = markdownRemark;

    return (
        <Layout>
            <SEO title={frontmatter.title} />
            <Carousel slides={frontmatter.slides} />
            <Container classes={{ root: style.blogTemplate }}>
                <Grid container>
                    <Grid item md={10} lg={8}>
                        <h1>{frontmatter.title}</h1>
                        <div dangerouslySetInnerHTML={{ __html: html }} />
                    </Grid>
                </Grid>
            </Container>
            <Tools tools={frontmatter.tools} />
            <Contact />
        </Layout>
    );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
        html
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            tools
            slides {
                childImageSharp {
                    fluid(fit: COVER, maxHeight: 400) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
        }
    }
  }
`;

Template.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            html: PropTypes.string,
            frontmatter: PropTypes.shape({
                date: PropTypes.string,
                path: PropTypes.string,
                title: PropTypes.string,
                tools: PropTypes.arrayOf(PropTypes.string),
                slides: PropTypes.arrayOf(
                    PropTypes.shape({
                        fluid: PropTypes.shape({
                            GatsbyImageSharpFluid_withWebp_tracedSVG: PropTypes.any,
                        }),
                    }),
                ),
            }),
        }),
    }).isRequired,
};

export default Template;
