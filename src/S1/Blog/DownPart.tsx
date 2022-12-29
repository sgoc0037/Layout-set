import React from "react";
import { CommonCard } from "../../Common/Card/CommonCard";
import s from "./downPart.module.scss";

export function DownPart(props:any) {

    return (
        <>
            <h2 className={s.title}></h2>
            <span className={s.title}></span>
            <CommonCard {...props}></CommonCard>
            <CommonCard {...props}></CommonCard>
            <CommonCard {...props}></CommonCard>
            <CommonCard {...props}></CommonCard>
        </>
    )
}