import React from "react";
import { ICommonPast } from "../../types/types";
import s from './button.module.scss';

interface IButton extends ICommonPast {
    icon?: string
}

export function Button({ name, stylees, icon, children }: IButton) {

    const names = [name, s.button].join(' ');
    


    return <button className={names} style={stylees}>

        {children}

        {
            icon &&
            <img src={icon} />
        }

    </button>
}