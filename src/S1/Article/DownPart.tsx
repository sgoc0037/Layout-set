import React from 'react';
import s from './downPart.module.scss';

export function DownPart() {
    return (
        <div className={s.wrapper}>
            <div className={s.article}>
                <h1 className={s.title}></h1>
                <p className={s.description}></p>
                <ul className={s.info}>
                    <li className={s.ceil}><span></span></li>
                    <li className={s.ceil}><span></span></li>
                    <li className={s.ceil}><span></span></li>
                </ul>
                <button className={s.more}></button>
            </div>
            <img src=''/>                         
            {/* props */}
        </div>
    )
}