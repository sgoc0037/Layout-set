import React from "react";

interface IBtnOrLink extends ICommonPast {
    link: string
    children?: React.ReactNode
}

export function BtnOrLink({ name, stylees, link, children }: IBtnOrLink) {
    return link ? <a href={link} style={stylees} className={name}>{children}</a> : <button style={stylees} className={name}>{children}</button>
}