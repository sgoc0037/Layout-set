import React from "react";
import s from './usualCard.module.scss';
import { ICommonPast } from "../../../types/types";

interface IUsualCard extends ICommonPast {
    mode?: 'fill' | 'half' | 'default'
    path?: string
    backgroundColor?: string
}

export const UsualCard = ({ name, stylees, backgroundColor, mode = 'default', path, children, ...props }: IUsualCard) => {

    const card = [name, s.card].join(' ');
    const image = s[mode];
    const wrap = [s[`wrap-${mode}`], s.wrap].join(' ');

    const wrapStyle = mode !== 'fill' ? backgroundColor : 'transparent';

    return <div
        style={stylees}
        {...props}
        className={card}
    >
        {
            mode !== 'default' && <div className={image}>
                <img
                    src={path} />
            </div>
        }

        <div style={{ backgroundColor: wrapStyle }} className={wrap}>
            {children}
        </div>
    </div>
}