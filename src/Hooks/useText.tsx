import React, { isValidElement } from "react";

interface IUseText {
    components: Array<string>
    children?: React.ReactNode
}

export function useText({ components, children }: IUseText) {

    const body = React.Children.map(children, function (item, index) {
        return isValidElement(item) ? item : React.createElement(components[index], '', item);
    });

    return body;
}