import React from "react";
import { Cards } from "../../Common/Cards/Cards";
import { Card } from "../../Common/Cards/UsualCard/Card";
import s from "./downPart.module.scss";

export function DownPart(props: any) {

    return (
        <div className={s.wrapper}>
            <h2 className={s.title}></h2>
            <span className={s.title}></span>
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