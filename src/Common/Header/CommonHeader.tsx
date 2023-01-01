import React from 'react';
import { ICommonPast } from '../../types/types';
import s from './commonHeader.module.scss';

export function S1header({ name, stylees, children }: ICommonPast) {

    const names = [name, s.header].join(' ');

    return (
        <header style={stylees} className={names}>
            {children}
        </header>
    )
}