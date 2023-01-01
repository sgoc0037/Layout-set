import React from "react";
import s from './button.module.scss';

interface IButton extends ICommonPast {
    icon?: string | React.ReactNode
}

export function Button({ name, stylees, icon, children }: IButton) {

    const names = [name, s.button].join(' ');

    return <button className={names} style={stylees}>
        
        {children}

        {
            icon &&
            <img src='../../images/arrow_right.svg' />
        }

    </button>
}