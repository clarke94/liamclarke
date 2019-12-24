import React from 'react';
import { Container, Typography } from '@material-ui/core';
import anime from 'animejs';
import style from './banner.module.scss';

export const Banner = () => {

    const classSector = style.banner_sector;
    console.log(classSector);

    anime.timeline({loop: true})
        .add({
            targets: classSector,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 600,
        })

    
    return (
        <section className={style.banner}>
            <Container>
                <Typography variant="h2" component="h1">
                    <span className={style.banner_sector}>Digital </span>
                    <span className={style.banner_sector}>Web </span>
                    <span className={style.banner_sector}>App </span>
                    <span className={style.banner_sector}>Mobile </span>
                    <span className={style.banner_role}>Developer</span>
                </Typography>
                <Typography variant="subtitle1" component="h2">Lorem ipsum dolor sit amet. consectetur, adipiscing, elit</Typography>
            </Container>
        </section>
    );
}


export default Banner;
