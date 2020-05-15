import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import { Layout } from '../layout/layout';
import { SEO } from '../components/seo/seo';
import { Banner } from '../components/banner/banner';
import { Projects } from '../components/projects/projects';
import { Contact } from '../components/contact/contact';
import { Experience } from '../components/experience/experience';

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Web = edges.filter((edge) => edge.node.frontmatter.category === 'web');
    const Apps = edges.filter((edge) => edge.node.frontmatter.category === 'apps');
    const Mobile = edges.filter((edge) => edge.node.frontmatter.category === 'mobile');

    return (
        <Layout>
            <SEO title="Home" />
            <Banner />
            <Experience />
            <Projects web={Web} apps={Apps} mobile={Mobile} />
            <Contact />
        </Layout>
    );
};

export default IndexPage;

export const pageQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
            edges {
                node {
                    id
                    excerpt(pruneLength: 250)
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        path
                        title
                        category
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                          }
                    }
                }
            }
        }
    }
`;

IndexPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.arrayOf(PropTypes.shape({
                node: PropTypes.shape({
                    id: PropTypes.string,
                    excerpt: PropTypes.string,
                    frontmatter: PropTypes.shape({
                        date: PropTypes.string,
                        path: PropTypes.string,
                        title: PropTypes.string,
                        category: PropTypes.string,
                    }),
                }),
            })),
        }),
    }).isRequired,
};
