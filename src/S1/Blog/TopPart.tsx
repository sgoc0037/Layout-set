import React from "react";
import { Cards } from "../../Common/Cards/Cards";
import { Card } from "../../Common/Cards/UsualCard/Card";
import { ContentBoundary } from "../../Common/Layouts/ContentBoundary";
import { Avatar_names } from "../../Common/TextComponents/avatar_names/Avatar_names";
import { Q_h3_span_button } from "../../Common/TextComponents/threeHTML/Q_h3_span_button";
import { Q_h2_span } from "../../Common/TextComponents/twoHTML/Q_h2_span";
import s from './topPart.module.scss';

export function TopPart() {

    const content = ['Lorem ipsum dolor sit amet.', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime delectus numquam dolore?'];

    const avatar = <Avatar_names name={s.avatar} path="../../images/finn.jpg">
        {'john doe'}
    </Avatar_names>

    return (
        <ContentBoundary>
            <Q_h2_span>
                {content}
            </Q_h2_span>
            <Cards>
                {
                    [...Array(6)].map(item => {
                        return <Card name={s.card}>
                            <img src="../../images/travel.jpg" />
                            <Q_h3_span_button>
                                
                            </Q_h3_span_button>
                        </Card>
                    })
                }
            </Cards>
        </ContentBoundary>
    )
}