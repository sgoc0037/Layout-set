import React from "react";
import { ICommonPast } from "../../types/types";
import s from './icon.module.scss';

interface IIcon extends ICommonPast {
    component: React.ReactElement | string
}

export function Icon({ name, stylees, component }: IIcon) {

    const names = [name, s.icon].join(' ');

    return <div style={stylees} className={names}>{component}</div>
} 