import React from 'react';
import PropTypes from 'prop-types';
import { Grid, LinearProgress, Typography } from '@material-ui/core';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import style from './progress.module.scss';

export const Progress = (props) => {
    const { title, value, subskills } = props;

    return (
        <Grid container classes={{ root: style.progress }}>
            <Grid item xs={12} md={4}><Typography variant="h5" component="h3">{title}</Typography></Grid>
            <Grid item xs={12} md={8}><LinearProgress variant="determinate" value={value} classes={{ root: style.progress__bar }} /></Grid>
            <Grid item md={12} classes={{ root: style.progress__subcontainer }}>
                <SubdirectoryArrowRightIcon color="primary" classes={{ root: style.progress__subdirectory }} />
                <Typography variant="overline" gutterBottom>{subskills.join(', ')}</Typography>
            </Grid>
        </Grid>
    );
};

Progress.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    subskills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Progress;
