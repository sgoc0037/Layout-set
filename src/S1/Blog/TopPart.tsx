import React from "react";
import { CommonCard } from "../../Common/Card/CommonCard";
import s from './topPart.module.scss';

export function TopPart(props:any) {

    return (
        <>
            <h2 className={s.title}></h2>
            <span className={s.addition}></span>
            <div className={s.cards}>
                <CommonCard {...props}></CommonCard>
                <CommonCard {...props}></CommonCard>
                <CommonCard {...props}></CommonCard>
            </div>
        </>
    )
}