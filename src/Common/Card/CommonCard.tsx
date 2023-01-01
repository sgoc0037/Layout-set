import React, { ReactNode } from 'react';
import { ICommonPast } from '../../types/types';
import s from './commonCard.module.scss';

interface ICommonCard extends ICommonPast {
    image: string
    link: string
}

export function CommonCard({ name, stylees, image, link, children }: ICommonCard) {

    const names = [name, s.card].join(' ');

    return (
        <div className={s.card}>
            <img className={s.image} src={image}></img>
            <h2 className={s.title}>Marsi call at her home...</h2>
            <p className={s.node}></p>
            {!link &&
                <button style={stylees} className={names}>
                    {children}
                </button>
            }
            {link &&
                <a style={stylees} className={names}
                    href={link}>
                    {children}
                </a>
            }
        </div>
    )
}