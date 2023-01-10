import React from "react";
import { Share_fill } from "../../images/SVG/share_fill";
import { ICommonImage } from "../../types/types";
import s from './icon.module.scss';

export function Icon({ name, stylees }: ICommonImage) {

    const names = [name, s.icon].join(' ');

    return <div style={stylees} className={names}><Share_fill /></div>
} 