import React from "react";
import { Cards } from "../../Common/Cards/Cards";
import { Card } from "../../Common/Cards/UsualCard/Card";
import { Q_h2_span } from "../../Common/TextComponents/twoHTML/Q_h2_span";
import s from "./downPart.module.scss";

export function DownPart(props: any) {

    const content = ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus numquam dolore?'];

    return (
        <div className={s.wrapper}>
            <Q_h2_span>
                {content}
            </Q_h2_span>
            <Cards name={s.cards}>
                {
                    [...Array(4)].map((item, index) => {
                        return <Card name={s.card} path='../../images/JPG/Misty_forest_dark.jpg'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minus quasi, fugiat temporibus enim consequatur?</p>
                        </Card>
                    })
                }
            </Cards>
        </div>
    )
}