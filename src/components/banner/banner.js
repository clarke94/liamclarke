import React from 'react';
import { Container, Typography } from '@material-ui/core';
import style from './banner.module.scss';

export const Banner = () => (
    <section className={style.banner}>
        <Container>
            <Typography variant="h2" component="h1" className={style.banner__heading}>Digital Developer</Typography>
            <Typography variant="subtitle1" component="h2" className={style.banner__subheading}>Lorem ipsum dolor sit amet. consectetur, adipiscing, elit</Typography>
        </Container>
    </section>
);

export default Banner;
