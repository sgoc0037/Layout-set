import React from "react";
import { ICommonPast } from "../../types/types";
import s from './circle.module.scss';

export function Circle({ name, stylees, children }: ICommonPast) {

    const names = [name, s.wrapper].join(' ');

    return <div style={stylees} className={names}>
        {children}
    </div>
} 