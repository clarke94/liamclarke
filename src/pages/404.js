import React from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { Link } from 'gatsby';

import { Layout } from '../layout/layout';
import SEO from '../components/seo/seo';

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Container>
            <Box py={10}>
                <Typography variant="h3" component="h1">NOT FOUND</Typography>
                <Typography variant="overline" display="block">You just hit a route that doesn&#39;t exist... the sadness.</Typography>
                <Typography variant="overline" display="block">
                    Try going back to the&nbsp;
                    <Link to="/">Homepage</Link>
                    .
                </Typography>
            </Box>
        </Container>
    </Layout>
);

export default NotFoundPage;
