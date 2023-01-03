import React from "react";
import { ICommonPast } from "../../types/types";
import s from './image.module.scss';

interface IImage extends ICommonPast {
    path: string
}

export function Image({ name, stylees, path }: IImage) {

    const names = [name, s.img].join(' ');

    return <img src={path} style={stylees} className={names} />
}