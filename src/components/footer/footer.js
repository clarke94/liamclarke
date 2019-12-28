import React from 'react';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import style from './footer.module.scss';

export const Footer = () => (
    <footer className={style.footer}>
        <Container classes={{ root: style.footer_container }}>
            <a href="https://www.linkedin.com/in/liamclarke94" className={style.footer_link} target="_blank" rel="noopener noreferrer" aria-label="Liam Clarke's LinkedIn profile">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://github.com/clarke94" className={style.footer_link} target="_blank" rel="noopener noreferrer" aria-label="Liam Clarke's Github profile">
                <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a href="https://codepen.io/Clarke2509" className={style.footer_link} target="_blank" rel="noopener noreferrer" aria-label="Liam Clarke's Codepen profile">
                <FontAwesomeIcon icon={faCodepen} size="3x" />
            </a>
        </Container>
        <Container classes={{ root: style.footer_container }}>
            <span>©&nbsp;</span>
            <span>{new Date().getFullYear()}</span>
            <span>, liamclarke.dev</span>
        </Container>
    </footer>
);

export default Footer;
