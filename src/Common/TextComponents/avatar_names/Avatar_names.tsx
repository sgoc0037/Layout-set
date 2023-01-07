import React from "react";
import s from './avatar_names.module.scss';
import { ICommonImage } from "../../../types/types";

export function Avatar_names({ name, stylees, path, children }: ICommonImage) {

    const names = [name, s.wrapper].join(' ');

    return <div style={stylees} className={names}>
        <img src={path} />
        <span>{children}</span>
    </div>
}