import React from "react";
import { DownPart } from "./DownPart";
import { TopPart } from "./TopPart";
import s from './blog.module.scss';

export function Blog() {
    return (
        <div className={s.blog}>
            <TopPart></TopPart>
            <DownPart></DownPart>
        </div>
    )
}