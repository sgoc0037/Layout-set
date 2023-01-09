import React, { isValidElement } from "react";

interface IUseText {
    components: Array<string>
    children?: React.ReactNode
}

export function useText({ components, children }: IUseText) {

    const pref = React.Children.toArray(children);

    const body = components.map((item, index) => {
        const e = pref[index];
        return isValidElement(e) ? e : React.createElement(item, '', e ? e : `CHANGE ME,I'M ${item}`);
    });

    return body;
}