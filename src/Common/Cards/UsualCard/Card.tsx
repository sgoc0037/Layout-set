import React from "react";
import s from './card.module.scss';
import { ICommonPast } from "../../../types/types";

interface ICard extends ICommonPast {
    mode?: 'fill' | 'half' | 'default'
    path?: string
    backgroundColor?: string
}

export const Card = ({ name, stylees = {}, path, children, ...props }: ICard) => {

    const card = [name, s.card, (path && s.img)].join(' ');

    stylees.backgroundImage = `url(${path})`;

    return <div style={stylees} className={card} {...props}>
        {children}
    </div>
}