import React from "react";
import { ICommonPast } from "../../types/types";
import s from './cards.module.scss';


interface ICards extends ICommonPast {
    mode: 'vertical' | 'horizontal'
}

export function Cards({ name, stylees, mode = "horizontal", children, ...props }: ICards) {

    const names = [name, s.cards].join(' ');

    return <div style={stylees} className={names} {...props}>
        {children}
    </div>
}