import React from "react";
import { ICommonPast } from "../../types/types";
import s from './image.module.scss';

interface IImage extends ICommonPast {
    path: string
    mode?: string
}

export function Image({ name, stylees = {}, path, mode = '' }: IImage) {

    const names = [name, s.img].join(' ');

    if (mode === 'fill') {
        stylees.height = '100%';
    }

    return <img src={path} style={stylees} className={names} />
}