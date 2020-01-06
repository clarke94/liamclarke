import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './carousel.module.scss';

export const Carousel = (props) => {
    const { slides } = props;

    const allSlides = slides.map((slide) => {
        const url = `url(${slide.childImageSharp.fluid.src})`;

        return (
            <div className={style.carousel__container}>
                <div className={style.carousel__image} style={{ backgroundImage: url }} />
            </div>
        );
    });

    return (
        <Container component="section">
            <Slider slidesToShow={1} slidesToScroll={1} speed={500} infinite dots arrows={false}>
                {allSlides}
            </Slider>
        </Container>
    );
};

Carousel.propTypes = {
    slides: PropTypes.arrayOf(
        PropTypes.shape({
            fluid: PropTypes.shape({
                GatsbyImageSharpFluid_withWebp_tracedSVG: PropTypes.any,
            }),
        }),
    ).isRequired,
};

export default Carousel;
