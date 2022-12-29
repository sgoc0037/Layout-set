import React from 'react';
import s from './commonCeil.module.scss';

interface ICommonCeil extends ICommonPast {
    link: string
}

export function CommonCeil(props: ICommonCeil) {

    const { name, stylees, link } = props;

    return (
        <>
            {!link &&
                <button style={stylees} className={`${s.ceil} ${name}`}>
                    {props.children}
                </button>
            }
            {link &&
                <a style={stylees} className={`${s.ceil} ${name}`}
                    href={link}>
                    {props.children}
                </a>
            }
        </>
    )
}