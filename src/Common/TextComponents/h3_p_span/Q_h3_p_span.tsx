import React, { isValidElement } from "react";
import { ICommonPast } from "../../../types/types";
import s from './Q_h3_p_span.module.scss'



export function Q_h3_p_span({ name, stylees, children }: ICommonPast) {

    const names = [name, s.wrapper].join(' ');

    const frame = ['h3', 'p', 'span'];

    const body = React.Children.map(children, function (item, index) {
        const elem = React.createElement(frame[index], '', item);
        
        return isValidElement(item) ? item : elem;
    });
    
    return <div className={s.wrapper}>
        {body}
    </div>
}