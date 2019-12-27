import React from 'react';
import { Typography } from '@material-ui/core';
import Anime from 'react-anime';
import style from './banner.module.scss';
import Section from '../section/section';

export const Banner = () => {
    
    return (
        <Section>
            <Typography variant="h2" component="h1">
                <span className={style.banner_headingContainer}>
                    <Anime 
                        easing='easeInOutCubic'
                        duration={3000}
                        loop={true}
                        autoplay={true}
                        delay={(el, index) => index * 3000}
                        opacity={[0,1,1,1,0]}
                        translateY={['-50px', '0px', '0px','0px', '10px']}
                    >
                        <span className={style.banner_sector}>Digital </span>
                        <span className={style.banner_sector}>Web </span>
                        <span className={style.banner_sector}>App </span>
                        <span className={style.banner_sector}>Mobile </span>
                    </Anime>
                </span>
                <span className={style.banner_role}>Developer</span>
            </Typography>
        </Section>
    );
}


export default Banner;
