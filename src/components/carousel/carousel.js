import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './carousel.module.scss';

const CarouselArrows = (props) => {
    const { icon, onClick, modifier } = props;
    const variant = modifier === 'left' ? style.carousel__button_left : style.carousel__button_right;
    return (
        <button type="button" className={`${style.carousel__button} ${variant}`} onClick={onClick}>
            <FontAwesomeIcon icon={icon} size="2x" className={style.carousel__arrow} />
        </button>
    );
};

CarouselArrows.propTypes = {
    icon: PropTypes.objectOf(PropTypes.any).isRequired,
    onClick: PropTypes.func,
    modifier: PropTypes.string.isRequired,
};

CarouselArrows.defaultProps = {
    onClick: undefined,
};

export const Carousel = (props) => {
    const { slides } = props;

    const allSlides = slides.map((slide) => {
        const url = `url(${slide.childImageSharp.fluid.src})`;

        return (
            <div key={slide.childImageSharp.fluid.src} className={style.carousel__container}>
                <div className={style.carousel__image} style={{ backgroundImage: url }} />
            </div>
        );
    });

    return (
        <Container component="section">
            <Slider
                slidesToShow={1}
                slidesToScroll={1}
                speed={500}
                prevArrow={<CarouselArrows icon={faChevronCircleLeft} modifier="left" />}
                nextArrow={<CarouselArrows icon={faChevronCircleRight} modifier="right" />}
                infinite
                dots
            >
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
