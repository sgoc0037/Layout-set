import React from "react";
import s from './layouts.module.scss';

export function ContentBoundary({ children }: { children: React.ReactNode }) {
    return <div className={s.contentBoundary}>
        {children}
    </div>
}