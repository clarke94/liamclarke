import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';
import { Banner } from '../components/banner/banner';
import { Projects } from '../components/projects/projects';

const IndexPage = ({
    data: {
        allMarkdownRemark: { edges },
    },
}) => {
    const Web = edges.filter((edge) => edge.node.frontmatter.category === 'web');
    const Apps = edges.filter((edge) => edge.node.frontmatter.category === 'apps');

    return (
        <Layout>
            <SEO title="Home" />
            <Banner />
            <Projects web={Web} apps={Apps} />
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
          }
        }
      }
    }
  }
`;

IndexPage.propTypes = {
    data: PropTypes.instanceOf(pageQuery).isRequired,
};
