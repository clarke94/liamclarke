import React from 'react';
import { Container, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import style from './section.module.scss';

export const Section = (props) => {
    const { children, title } = props;

    return (
        <Container component="section" classes={{ root: style.section }}>
            {title ? <Typography variant="h4" component="h2" align="center" display="block" color="primary" gutterBottom>{title}</Typography> : ''}
            {children}
        </Container>
    );
};

Section.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string,
};

Section.defaultProps = {
    title: null,
};

export default Section;
