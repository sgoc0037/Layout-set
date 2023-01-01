import React from "react";
import { DownPart } from "./DownPart";
import { TopPart } from "./TopPart";
import s from './article.module.scss';
import { ContentBoundary } from "../../Common/Layouts/ContentBoundary";


export function Article() {
    return (
        <ContentBoundary>
            <main className={s.article}>
                <TopPart />
                <DownPart />
            </main>
        </ContentBoundary>
    )
}