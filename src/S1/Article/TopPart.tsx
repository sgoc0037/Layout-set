import React from 'react'
import s from './topPart.module.scss'

export function TopPart() {
    return (
        <div className={s.article}>
            <h1 className={s.title}></h1>
            <span className={s.addition}></span>
            <button className={s.more}></button>
        </div>
    )
}