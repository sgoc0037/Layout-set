import React, { isValidElement } from "react";
import { useText } from "../../../Hooks/useText";
import { ICommonPast } from "../../../types/types";
import s from './Q_h3_p_span.module.scss'



export function Q_h3_p_span({ name, stylees, children }: ICommonPast) {

    const names = [name, s.wrapper].join(' ');

    return <div className={s.wrapper}>
        {useText({ components: ['h3', 'p', 'span'], children })}
    </div>
}