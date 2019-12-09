import React from 'react';
import { Container } from '@material-ui/core';
import style from './banner.module.scss';

export const Banner = () => (
    <section className={style.banner}>
        <Container>
            <h1 className={style.banner__heading}>Digital Developer</h1>
            <h2 className={style.banner__subheading}>
                Lorem ipsum dolor sit amet.
                <span>consectetur, adipiscing, elit</span>
                .
            </h2>
        </Container>
    </section>
);

export default Banner;
