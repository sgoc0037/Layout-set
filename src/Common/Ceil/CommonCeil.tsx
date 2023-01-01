import React from 'react';
import { ICommonPast } from '../../types/types';
import s from './commonCeil.module.scss';

interface ICommonCeil extends ICommonPast {
    link: string
}

export function CommonCeil({ name, stylees, link, children }: ICommonCeil) {

    const names = [name, s.ceil].join(' ');

    return (
        <>
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
        </>
    )
}