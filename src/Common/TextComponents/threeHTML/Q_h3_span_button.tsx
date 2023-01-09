import React from "react";
import { useText } from "../../../Hooks/useText";
import { ICommonPast } from "../../../types/types";
import s from '../commonText.module.scss';

export function Q_h3_span_button({ name, stylees, children }: ICommonPast) {

    const names = [name, s.wrapper].join(' ');

    return <div style={stylees} className={names}>
        {useText({ components: ['h3', 'span', 'button'], children })}
    </div>
}