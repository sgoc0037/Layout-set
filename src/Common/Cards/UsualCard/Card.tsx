import React from "react";
import s from './card.module.scss';
import { ICommonImage } from "../../../types/types";

export const Card = ({ name, stylees = {}, path, children, ...props }: ICommonImage) => {

    const card = [name, s.card, (path && s.img)].join(' ');

    {
        path &&
            (stylees.backgroundImage = `url(${path})`)
    }

    return <div style={stylees} className={card} {...props}>
        {children}
    </div>
}