import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import { Header } from '../header/header';
import { Footer } from '../footer/footer';

import './layout.scss';

export const Layout = ({ children }) => {
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
