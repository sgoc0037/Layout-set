import React from "react";
import { Cards } from "../../Common/Cards/Cards";
import { UsualCard } from "../../Common/Cards/UsualCard/UsualCard";
import { Avatar_names } from "../../Common/TextComponents/avatar_names/Avatar_names";
import { Q_h2_span } from "../../Common/TextComponents/h2_span/Q_h2_span";
import { Q_h3_p_span } from "../../Common/TextComponents/h3_p_span/Q_h3_p_span";
import { useText } from "../../Hooks/useText";
import s from './topPart.module.scss';

export function TopPart() {

    const content = ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus numquam dolore?'];

    const avatar = <Avatar_names>
        {'john doe'}
    </Avatar_names>

    return (
        <>
            <Q_h2_span>
                {content}
            </Q_h2_span>
            <Cards>
                {
                    [...Array(6)].map(item => {
                        return <UsualCard path="../../images/travel.jpg" mode="half" backgroundColor='#20242f'>
                            <Q_h3_p_span>
                                {[avatar, ...content]}
                            </Q_h3_p_span>
                        </UsualCard>
                    })
                }
            </Cards>
        </>
    )
}