import React from "react";
import { DownPart } from "./DownPart";
import { TopPart } from "./TopPart";
import s from './article.module.scss';


export function Article() {
    return (
        <main className={s.article}>
            <TopPart />
            <DownPart />
        </main>
    )
}