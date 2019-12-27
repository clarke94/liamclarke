import React from 'react';
import { Container } from '@material-ui/core';
import PropTypes from 'prop-types';
import style from './section.module.scss';

export const Section = ({children}) => {

    return (
        <Container component="section" classes={{root: style.section}}>
            {children}
        </Container>
    );
};


Section.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Section;
