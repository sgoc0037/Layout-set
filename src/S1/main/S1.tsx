import React from 'react';
import { CommonCeil } from '../../Common/Ceil/CommonCeil';
import { S1header } from '../../Common/Header/CommonHeader';
import { Article } from '../Article/Article';
import { Blog } from '../Blog/Blog';
import { Footer } from '../Footer/Footer';
import s from './S1.module.scss';

export function S1() {

    const s1 = {
        headerStrList: ['Logo', 'Home', 'About Us', 'Blog', 'Contact'],
        headerLinkList: ['', '', '', '', ''],
        header: {
            stylees: {},
            name: s.header
        },
        ceil: {
            stylees: {},
            name: s.ceil
        },
        footer: {
            stylees: {},
            name: s.footer,
            link: null
        }
    }

    return (
        <div className={s.S1}>
            <S1header {...s1.header}>
                {
                    s1.headerStrList.map((headerStr, index) => {

                        let prep = { ...s1.ceil, link: s1.headerLinkList[index] }

                        return <CommonCeil
                            key={headerStr}
                            {...prep}
                        >
                            {headerStr}
                        </CommonCeil>
                    })
                }
                <input className={s.headerSearch} type='search' placeholder="Search" />
            </S1header>
            <hr />
            <Article />
            <Blog />
            <Footer {...s1.footer}/>
        </div>
    )
}