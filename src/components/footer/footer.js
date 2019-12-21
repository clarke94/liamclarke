import React from 'react';
import style from './footer.module.scss';

export const Footer = () => (
    <footer className={style.footer}>
        ©
            {new Date().getFullYear()}
        , liamclarke.dev
    </footer>
);

export default Footer;
