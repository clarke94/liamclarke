import React from 'react';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import style from './footer.module.scss';

export const Footer = () => (
    <footer className={style.footer}>
        <Container classes={{ root: style.footer_container }}>
            <a href="https://www.linkedin.com/in/liamclarke94" className={style.footer_link} target="_blank" rel="noopener noreferrer" aria-label="Liam Clarke's LinkedIn profile" title="Liam Clarke's LinkedIn profile">
                <FontAwesomeIcon icon={faLinkedin} size="3x" />
            </a>
            <a href="https://github.com/clarke94" className={style.footer_link} target="_blank" rel="noopener noreferrer" aria-label="Liam Clarke's Github profile" title="Liam Clarke's Github profile">
                <FontAwesomeIcon icon={faGithub} size="3x" />
            </a>
            <a href="https://codepen.io/Clarke2509" className={style.footer_link} target="_blank" rel="noopener noreferrer" aria-label="Liam Clarke's Codepen profile" title="Liam Clarke's Codepen profile">
                <FontAwesomeIcon icon={faCodepen} size="3x" />
            </a>
            <a href="https://teamtreehouse.com/liamclarke" className={style.footer_link} target="_blank" rel="noopener noreferrer" aria-label="Liam Clarke's Treehouse profile" title="Liam Clarke's Treehouse Moderator profile">
                <svg className="svg-inline--fa fa-linkedin fa-w-14 fa-3x" preserveAspectRatio="xMinYMin meet" viewBox="0 0 30 32">
                    <g fill="currentColor">
                        <path d="M26.5 5.9c-1.1-0.6-2.8 0.4-3.9 2.2l-1.9 3.2c-0.7 1.3-0.6 3 0.3 4.2l0.1 0.1c0.9 1.2 2.1 2.4 2.4 2.8 0.2 0.2 0.4 0.5 0.5 0.9 0.3 1.1-0.3 2.3-1.5 2.6 -1.1 0.3-2.3-0.3-2.7-1.5 -0.1-0.3-0.1-0.6-0.1-0.8 0.1-0.5-0.1-1.2-0.8-2 -0.7-0.7-2.1 0.7-2.5 2.1v0.1c-0.4 1.4-0.7 2.7-0.6 2.8 0.1 0.1 0.1 0.1 0.1 0.2 0.6 1.2 0.2 2.6-1 3.2 -1.2 0.6-2.7 0.2-3.3-1s-0.2-2.6 1-3.2c0.1 0 0.1-0.1 0.2-0.1 0.1 0 0.3-0.6 0.6-1.4 0.2-0.7 0.3-1 0.4-1.3 0.1-0.4 0.3-1.4 0.2-1.8 -0.1-0.5-0.6-0.5-1.2-0.2 -0.3 0.2-0.9 0.7-1.1 0.9 -0.5 0.4-0.9 1-1.1 1.5 -0.1 0.2-0.3 0.5-0.5 0.7 -0.9 0.7-2.3 0.6-3-0.3 -0.7-0.9-0.6-2.2 0.3-3 0.3-0.2 0.6-0.4 0.9-0.4 0.5-0.1 2.4-1.2 3.5-2 0.2-0.1 0.5-0.4 0.6-0.5 0.3-0.4 0-0.7-0.3-0.7 -0.9 0.1-1.9 0.2-2.1 0.5 -0.1 0.1-0.2 0.3-0.4 0.4 -0.9 0.6-2.1 0.4-2.7-0.4 -0.6-0.8-0.4-2 0.4-2.6 0.4-0.3 0.8-0.4 1.2-0.4 0.7 0 2.5 0.4 4 0.1l0.4-0.1c1.5-0.3 3.3-1.6 4-2.9 0 0 0.7-1.2 1.6-2.7 0.9-1.5 0.8-3.2-0.1-3.7l-1.7-1c-0.9-0.5-2.3-0.5-3.2 0L1.6 7C0.7 7.5 0 8.6 0 9.6v12.8c0 1 0.7 2.2 1.6 2.7l11.9 6.5c0.9 0.5 2.3 0.5 3.2 0l11.8-6.5c0.9-0.5 1.6-1.7 1.6-2.7V9.6c0-1-0.7-2.2-1.6-2.7C26.5 5.9 28.5 7 26.5 5.9z" />
                    </g>
                </svg>
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
