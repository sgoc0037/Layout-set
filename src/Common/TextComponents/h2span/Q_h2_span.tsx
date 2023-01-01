import React from "react";
import s from './Q_h2_span.module.scss';

export function Q_h2_span({ children }: { children: React.ReactNode }) {

    const names = [s.wrapper].join(' ');

    const [h1, span] = React.Children.toArray(children);

    return <div className={names}>
        <h2>{h1}</h2>
        <span>{span}</span>
    </div>
}