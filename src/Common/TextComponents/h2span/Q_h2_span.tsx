import React from "react";
import { ICommonPast } from "../../../types/types";
import s from '../commonText.module.scss';

export function Q_h2_span({ name, children }: ICommonPast) {

    const names = [name, s.wrapper].join(' ');

    const [h1, span] = React.Children.toArray(children);

    return <div className={names}>
        <h2>{h1}</h2>
        <span>{span}</span>
    </div>
}