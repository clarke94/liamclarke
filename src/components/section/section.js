import React from 'react';
import { Container, Typography } from '@material-ui/core';
import Fade from 'react-reveal/Fade';
import PropTypes from 'prop-types';
import style from './section.module.scss';

export const Section = (props) => {
    const {children, title} = props;

    return (
        <Fade bottom>
            <Container component="section" classes={{root: style.section}}>
                {title ? <Typography variant="h4" component="h3" align="center" display="block" color="primary" gutterBottom>{title}</Typography> : ''}
                {children}
            </Container>
        </Fade>
    );
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Section;
