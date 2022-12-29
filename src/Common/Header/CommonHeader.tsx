import React from 'react';
import s from './commonHeader.module.scss';

export function S1header(props:ICommonPast) {

    const { name, stylees } = props;

    return (
        <header style={stylees} className={`${s.header} ${name}`}>
            {props.children}
        </header>
    )
}