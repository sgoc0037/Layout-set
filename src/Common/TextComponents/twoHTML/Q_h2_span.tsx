import React from "react";
import { useText } from "../../../Hooks/useText";
import { ICommonPast } from "../../../types/types";
import s from '../commonText.module.scss';

export function Q_h2_span({ name, children }: ICommonPast) {

    const names = [name, s.wrapper].join(' ');

    return <div className={names}>
        {useText({ components: ['h2', 'span'], children })}
    </div>
}