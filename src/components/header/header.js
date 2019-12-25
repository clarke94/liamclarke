import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { Link } from 'gatsby';

export const Header = () => (
    <header>
        <Container>
            <Typography variant="h6" color="inherit">
                <Link to="/">Liam Clarke</Link>
            </Typography>
        </Container>
    </header>
);

export default Header;