import React from "react";
import s from './card.module.scss';
import PropTypes from 'prop-types';
import { ICommonPast } from "../../types/types";

interface ICard extends ICommonPast {
    mode?: 'fill' | 'half'
    path?: string
}

export const Card = ({ name, stylees, mode, path, children, ...props }: ICard) => {

    const card = [name, s.card].join(' ');
    const image = mode === 'fill' ? s.fill : s.half;
    const wrap = (mode === 'fill' ? [s.wrapFill, s.wrap] : [s.wrapHalf, s.wrap]).join(' ');

    return <div
        style={stylees}
        {...props}
        className={card}
    >
        {
            mode && <div className={image}>
                <img
                    src={path} />
            </div>
        }

        <div className={wrap}>
            {children}
        </div>
    </div>
}