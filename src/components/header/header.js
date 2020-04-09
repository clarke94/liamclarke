import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';

export const Header = () => (
    <header>
        <Container>
            <Typography variant="h6" component="span" color="inherit">
                <a href="/">Liam Clarke</a>
            </Typography>
        </Container>
    </header>
);

export default Header;
