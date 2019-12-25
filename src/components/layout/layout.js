/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import Header from '../header/header';
import { Footer } from '../footer/footer';

import './layout.scss';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
  `);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#0077b5',
      },
      secondary: {
        light: '#0066ff',
        main: '#0044ff',
        contrastText: '#ffcc00',
      },
    },
  });

    return (
        <ThemeProvider theme={theme}>
            <Header />
                <main>{children}</main>
            <Footer />
        </ThemeProvider>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
