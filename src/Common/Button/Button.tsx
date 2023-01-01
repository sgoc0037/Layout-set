import React from "react";
import { ICommonPast } from "../../types/types";
import s from './button.module.scss';

interface IButton extends ICommonPast {
    icon?: string | React.ReactNode
}

export function Button({ name, stylees, icon, children }: IButton) {

    const names = [name, s.button].join(' ');

    const elem = typeof icon === 'string' ? <img src={icon} /> : icon;

    return <button className={names} style={stylees}>
        <span>{children}</span>
        <div>{elem}</div>
    </button>
}