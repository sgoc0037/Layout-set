import React, { isValidElement } from "react";
import { makeKey } from "../utils/utils";

interface IUseText {
    components: Array<string>
    children?: React.ReactNode
}

export function useText({ components, children }: IUseText) {

    const pref = React.Children.toArray(children);

    const body = components.map((item, index) => {
        const e = pref[index];

        return isValidElement(e)
            ? React.cloneElement(e)
            : React.createElement(item, { key: makeKey(item) }, e ? e : `CHANGE ME,I'M ${item}`);
    });

    return body;
}