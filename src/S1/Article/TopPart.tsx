import React from 'react'
import { Button } from '../../Common/Button/Button';
import { Q_h2_span } from '../../Common/TextComponents/h2span/Q_h2_span';
import s from './topPart.module.scss'

export function TopPart() {

    const content = ['Lorem ipsum dolor sit amet consectetur, adipisicing elit.', 'Lorem ipsum dolor sit.'];
    const icon = '../../images/SVG/arrow_right.svg';

    return (
        <div className={s.article}>
            <Q_h2_span name={s.wrapper}>
                {content}
            </Q_h2_span>
            <Button icon={icon} name={s.more}>
                Read more
            </Button>
        </div>
    )
}