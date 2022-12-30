import React from 'react'
import s from './topPart.module.scss'

export function TopPart() {
    return (
        <div className={s.article}>
            <h1 className={s.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h1>
            <span className={s.addition}>Lorem ipsum dolor sit.</span>
            <button className={s.more}>Read more</button>
        </div>
    )
}