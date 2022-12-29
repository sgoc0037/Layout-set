import React, { ReactNode } from 'react';
import s from './commonCard.module.scss';

interface ICommonCard extends ICommonPast {
    image: string
    link: string
}

export function CommonCard(props: ICommonCard) {

    const { name, stylees, image, link } = props

    return (
        <div className={s.card}>
            <img className={s.image} src={image}></img>
            <h2 className={s.title}>Marsi call at her home...</h2>
            <p className={s.node}></p>
            {!link &&
                <button style={stylees} className={`${s.card} ${name}`}>
                    {props.children}
                </button>
            }
            {link &&
                <a style={stylees} className={`${s.card} ${name}`}
                    href={link}>
                    {props.children}
                </a>
            }
        </div>
    )
}