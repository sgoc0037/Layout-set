import React from 'react';
import { Article } from '../Article/Article';
import { Blog } from '../Blog/Blog';
import { Footer } from '../Footer/Footer';
import { S1_header } from '../header/S1_Header';
import s from './S1.module.scss';

export function S1() {

    const s1 = {
        footer: {
            stylees: {},
            name: s.footer,
            link: null
        }
    }

    const stylees = {
        backgroundImage: 'url(../../images/Misty_forest_dark.jpg)',
    }

    return (
        <div style={stylees} className={s.S1}>
            <S1_header />
            <Article />
            <Blog />
            <Footer {...s1.footer} />
        </div>
    )
}