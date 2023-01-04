import React from "react";
import { CommonCard } from "../../Common/Card/CommonCard";
import { Image } from "../../Common/Image/Image";
import { Q_h2_span } from "../../Common/TextComponents/h2span/Q_h2_span";
import s from './topPart.module.scss';

export function TopPart(props: any) {

    const content = ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus numquam dolore?']

    return (
        <>
            <Q_h2_span>
                {content}
            </Q_h2_span>
            <div className={s.cards}>
                <CommonCard>
                    {
                        <>
                        <Image mode='fill' path='../../images/Misty_forest_dark.jpg' />
                        </>
                    }
                </CommonCard>
            </div>
        </>
    )
}