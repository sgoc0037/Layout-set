import React from "react";
import { ICommonImage } from "../../types/types";
import s from './icon.module.scss';

export function Icon({ name, stylees, path = '../../images/SVG/arrow_right.svg' }: ICommonImage) {

    const names = [name, s.icon].join(' ');

    return <div style={stylees} className={names}><img src={path} /></div>
} 