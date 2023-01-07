import React from "react";
import { useText } from "../../../Hooks/useText";
import { ICommonPast } from "../../../types/types";

export function Q_h3_p_button({ name, stylees, children }: ICommonPast) {

    return <div>
        {useText({ components: ['h3', 'p', 'button'], children })}
    </div>
}