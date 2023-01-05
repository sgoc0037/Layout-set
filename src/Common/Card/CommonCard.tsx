import React from 'react';
import { ICommonPast } from '../../types/types';
import s from './commonCard.module.scss';

interface ICommonCard extends ICommonPast {

}

export function CommonCard({ name, stylees, children }: ICommonCard) {

    const names = [name, s.card].join(' ');

    return (
        <div className={s.card}>
            {children}
        </div>
    )
}