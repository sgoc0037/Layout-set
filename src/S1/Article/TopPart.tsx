import React from 'react'
import { Q_h2_span } from '../../Common/TextComponents/h2span/Q_h2_span';
import s from './topPart.module.scss'

export function TopPart() {

    const content = ['Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit.'];

    return (
        <div className={s.article}>
            <Q_h2_span>
                {content}
            </Q_h2_span>
            <button className={s.more}>Read more</button>
        </div>
    )
}