import React, { Component } from 'react';
import style from "./banner.module.scss";

export class Banner extends Component {
    render() {
        return (
            <section className={style.banner}>
                <h1 className={style.banner__heading}>Digital Developer</h1>
                <h2 className={style.banner__subheading}>Lorem ipsum dolor sit amet. <span>consectetur, adipiscing, elit</span>.</h2>
            </section>
        )
    }
}

export default Banner;
