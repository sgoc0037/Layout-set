import React from "react";
import s from './avatar_names.module.scss';
import { ICommonImage } from "../../../types/types";

export function Avatar_names({ name, stylees, path, children }: ICommonImage) {

    const names = [name, s.wrapper].join(' ');

    return <div style={stylees} className={names}>
        <div className={s.img}>
            {/* <img src={path} /> */}
        </div>
        <span>{children}</span>
    </div>
}