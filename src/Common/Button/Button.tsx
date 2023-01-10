import React, { CSSProperties } from "react";
import { ICommonPast } from "../../types/types";
import { Icon } from "../Icon/Icon";
import s from './button.module.scss';

interface IButton extends ICommonPast {
    icon?: string
    iconStylees?: CSSProperties
}

export function Button({ name, stylees, icon, iconStylees, children }: IButton) {

    const names = [name, s.button].join(' ');
    
    return <button className={names} style={stylees}>
        {React.Children.count(children) !== 0 &&
            <span>{children}</span>}
        {icon && <Icon stylees={iconStylees} path={icon} />}
    </button>
}