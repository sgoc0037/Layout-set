import React from "react";
import { ICommonPast } from "../../types/types";
import s from './cards.module.scss';


interface ICards extends ICommonPast {
    mode?: 'vertical'
}

export function Cards({ name, stylees, mode, children, ...props }: ICards) {

    const names = [name, mode && s[mode], s.cards].join(' ');

    return <div style={stylees} className={names} {...props}>
        {children}
    </div>
}