import React from "react";
import { ICommonPast } from "../../../types/types";
import s from 'commonText.module.scss'



export function Q_h3_p_span({ name, stylees, children }: ICommonPast) {

    const names = [name, s.wrapper].join(' ');

    const [h3, p, span] = React.Children.toArray(children);

    return <div className={s.wrapper}>
        <h3>{h3}</h3>
        <p>{p}</p>
        <span>{span}</span>
    </div>
}