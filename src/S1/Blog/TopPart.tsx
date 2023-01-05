import React from "react";
import { CommonCard } from "../../Common/Card/CommonCard";
import { Image } from "../../Common/Image/Image";
import { Avatar_names } from "../../Common/TextComponents/avatar_names/Avatar_names";
import { Q_h2_span } from "../../Common/TextComponents/h2span/Q_h2_span";
import { Q_h3_p_span } from "../../Common/TextComponents/h3_p_span/Q_h3_p_span";
import s from './topPart.module.scss';

export function TopPart(props: any) {

    const content = ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus numquam dolore?'];

    const avatar = <Avatar_names path='../../images/Misty_forest_dark.jpg'>
        {'Ms Marseline Abadir'}
    </Avatar_names>

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
                            <Q_h3_p_span>
                                {
                                    [<span>'sdaasdasd lorem '</span>,
                                        'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                        'asddsas']
                                }
                            </Q_h3_p_span>
                        </>
                    }
                </CommonCard>
            </div>
        </>
    )
}